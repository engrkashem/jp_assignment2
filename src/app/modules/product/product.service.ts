import AppError from '../../errors/AppError';
import { searchableFields } from './product.constants';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);

  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  let searchQuery = Product.find();

  if (query?.searchTerm) {
    const searchTerm = query.searchTerm;
    searchQuery = searchQuery.find({
      $or: searchableFields.map((field) => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  const result = await searchQuery;

  return result;
};

const getProductFromDB = async (productId: string) => {
  const result = await Product.isProductExists(productId);

  if (!result) {
    throw new AppError(404, 'Product not found');
  }

  return result;
};

const updateProductIntoDB = async (
  productId: string,
  payload: Partial<TProduct>,
) => {
  const product = await Product.isProductExists(productId);

  if (!product) {
    throw new AppError(404, 'Product not found');
  }

  const { inventory, ...remainingProductData } = payload;

  const updatedProduct: Record<string, unknown> = {
    ...remainingProductData,
  };

  /* Handle inventory*/
  if (inventory && Object.keys(inventory).length) {
    for (const [key, val] of Object.entries(inventory)) {
      updatedProduct[`inventory.${key}`] = val; // saving as inventory.quantity etc form
    }
  }

  const result = await Product.findByIdAndUpdate(productId, updatedProduct, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);

  if (!result) {
    throw new AppError(404, 'Product not found');
  }

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
