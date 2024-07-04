import { Model, Types } from 'mongoose';

export type TOrder = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};

export interface OrderModel extends Model<TOrder> {
  isOrderExists(id: string): Promise<TOrder | null>;
}
