import { model, Schema } from 'mongoose';
import { OrderModel, TOrder } from './order.interface';

/*** Order Schema ***/
const orderModelSchema = new Schema<TOrder, OrderModel>(
  {
    email: {
      type: String,
      required: [true, 'User email is required'],
      trim: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product Id is required'],
      trim: true,
    },
    price: { type: Number, required: [true, 'Price is required'] },
    quantity: { type: Number, required: [true, 'Quantity is required'] },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  },
);

/*** Custom static method ***/
orderModelSchema.statics.isOrderExists = async function (id: string) {
  // it will check wether an order exists or not
  return await Order.findById(id);
};

/*** Order model ***/
export const Order = model<TOrder, OrderModel>('Order', orderModelSchema);
