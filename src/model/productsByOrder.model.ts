import { IOrder } from "./order.model";

export interface IProductByOrder {
  orderNo: string;
  productList: IOrder[];
  numberOfProducts: number;
  createdBy: string;
}
