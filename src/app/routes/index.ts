import { Router } from 'express';
import { ProductRoutes } from '../modules/product/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((routeObj) => router.use(routeObj.path, routeObj.route));

export default router;
