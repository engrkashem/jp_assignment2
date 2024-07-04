import { z } from 'zod';

const createOrderValidationSchema = z.object({
  email: z.string(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const updateOrderValidationSchema = z.object({
  email: z.string().optional(),
  productId: z.string().optional(),
  price: z.number().optional(),
  quantity: z.number().optional(),
});

export const OrderValidations = {
  createOrderValidationSchema,
  updateOrderValidationSchema,
};
