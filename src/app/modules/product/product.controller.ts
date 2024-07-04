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

export const ProductControllers = {
  createProduct,
};
