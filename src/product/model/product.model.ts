export interface IProduct {
  "productId"?: string;
  "productName": string;
  "category": string;
  "description": string;
  "createdBy": string | undefined;
  "stockQuantity"?: number;
  "procurementDate"?: Date;
  "ordersPending"?: number;
}
