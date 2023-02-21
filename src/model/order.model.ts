import { IProduct } from "src/product/model/product.model";

export interface IOrder {
  product: IProduct;
  count: number;
  orderNumber: string;
  createdBy: string;
}
