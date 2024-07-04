import catchAsyncRequest from '../../utils/catchAsyncRequest';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsyncRequest(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Product created successfully!',
  });
});

const getAllProducts = catchAsyncRequest(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB();

  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Products fetched successfully!',
  });
});

const getProduct = catchAsyncRequest(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.getProductFromDB(productId);

  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Product fetched successfully!',
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProduct,
};
