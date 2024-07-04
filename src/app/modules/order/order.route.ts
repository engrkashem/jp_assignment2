import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OrderControllers } from './order.controller';
import { OrderValidations } from './order.validation';

const router = Router();

router.post(
  '/',
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder,
);

export const OrderRoutes = router;
