import AppError from '../../errors/AppError';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);

  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();

  return result;
};

const getProductFromDB = async (productId: string) => {
  const result = await Product.isProductExists(productId);

  if (!result) {
    throw new AppError(404, 'Product not found');
  }

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductFromDB,
};
