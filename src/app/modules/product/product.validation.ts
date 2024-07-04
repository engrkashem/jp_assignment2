import { z } from 'zod';

const createProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    }),
  ),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});

const updateProductValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z
    .array(
      z.object({
        type: z.string().optional(),
        value: z.string().optional(),
      }),
    )
    .optional(),
  inventory: z
    .object({
      quantity: z.number().optional(),
      inStock: z.boolean().optional(),
    })
    .optional(),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
