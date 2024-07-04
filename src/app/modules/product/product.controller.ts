import catchAsyncRequest from '../../utils/catchAsyncRequest';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsyncRequest(async (req, res) => {
  //calling service function
  const result = await ProductServices.createProductIntoDB(req.body);

  // sending response via utility function
  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Product created successfully!',
  });
});

const getAllProducts = catchAsyncRequest(async (req, res) => {
  //calling service function
  const result = await ProductServices.getAllProductsFromDB(req.query);

  // sending response via utility function
  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Products fetched successfully!',
  });
});

const getProduct = catchAsyncRequest(async (req, res) => {
  const { productId } = req.params;

  //calling service function
  const result = await ProductServices.getProductFromDB(productId);

  // sending response via utility function
  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Product fetched successfully!',
  });
});

const updateProduct = catchAsyncRequest(async (req, res) => {
  const { productId } = req.params;

  //calling service function
  const result = await ProductServices.updateProductIntoDB(productId, req.body);

  // sending response via utility function
  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Product updated successfully!',
  });
});

const deleteProduct = catchAsyncRequest(async (req, res) => {
  const { productId } = req.params;

  //calling service function
  const result = await ProductServices.deleteProductFromDB(productId);

  // sending response via utility function
  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Product deleted successfully!',
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
