export interface IProduct {
  "productId"?: string;
  "productName": string;
  "category": string;
  "description": string;
  "createdBy": string | undefined;
  "stockQuantity"?: string;
  "procurementDate"?: Date;
  "ordersPending"?: number;
}
