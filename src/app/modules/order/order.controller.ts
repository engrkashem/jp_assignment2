import catchAsyncRequest from '../../utils/catchAsyncRequest';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './order.service';

const createOrder = catchAsyncRequest(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);
  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Order created successfully!',
  });
});

const getAllOrders = catchAsyncRequest(async (req, res) => {
  const result = await OrderServices.getAllOrdersFromDB();

  sendResponse(res, {
    status: 200,
    success: true,
    data: result,
    message: 'Orders fetched successfully!',
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
