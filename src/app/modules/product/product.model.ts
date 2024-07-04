import { model, Schema } from 'mongoose';
import {
  ProductModel,
  TInventory,
  TProduct,
  TVariant,
} from './product.interface';

/*** Sub Schemas ***/
const variantSchema = new Schema<TVariant>(
  {
    type: {
      type: String,
      required: [true, 'Type is required'],
      trim: true,
    },
    value: {
      type: String,
      required: [true, 'Value is required'],
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const inventorySchema = new Schema<TInventory>(
  {
    quantity: {
      type: String,
      required: [true, 'quantity is required'],
      trim: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    _id: false,
  },
);

/*** Product Schema ***/
const productModelSchema = new Schema<TProduct, ProductModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    price: { type: Number, required: [true, 'Price is required'], trim: true },
    category: {
      type: String,
      required: [true, 'category is required'],
      trim: true,
    },
    tags: { type: Array(String) },
    variants: { type: Array(variantSchema) },
    inventory: { type: inventorySchema },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  },
);

/*** Course model ***/
export const Product = model<TProduct, ProductModel>(
  'Product',
  productModelSchema,
);
