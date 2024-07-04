import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductControllers } from './product.controller';
import { ProductValidations } from './product.validation';

const router = Router();

router.post(
  '/',
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

export const ProductRoutes = router;
