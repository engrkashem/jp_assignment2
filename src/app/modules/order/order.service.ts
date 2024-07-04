import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const { productId, quantity } = payload;

  // get product from db
  const product = await Product.findById(productId);

  // check if product exists
  if (!product) {
    throw new AppError(404, 'Product not found');
  }

  // check if product quantity is greater than or equal to order quantity
  if (product.inventory?.quantity < quantity) {
    throw new AppError(400, 'Insufficient quantity available in inventory');
  }

  const currentQuantity =
    Number(product.inventory?.quantity) - Number(quantity);

  // initiating transaction session
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // place order
    const result = await Order.create([payload], { session });

    // update product quantity
    const updatableProductData = {
      'inventory.quantity': currentQuantity,
      'inventory.inStock': currentQuantity <= 0 ? false : true,
    };

    await Product.findByIdAndUpdate(productId, updatableProductData, {
      new: true,
      runValidators: true,
      session,
    });

    // finishing with commit and end of transaction session
    await session.commitTransaction();
    await session.endSession();

    return result[0];
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(400, 'Failed to Place Order');
  }

  console.log(product);
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
