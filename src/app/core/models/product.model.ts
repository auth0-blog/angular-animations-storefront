export interface IProduct {
  productId: number;
  title: string;
  description: string;
  categories: Categories[];
  type: ProductType;
  price: number;
  imageUrl: string;
}

export interface IProductType {
  displayName: string;
  typeKey: ProductType;
}

export enum ProductType {
  explore = 'explore',
  new = 'new',
  trending = 'trending',
  recommended = 'recommended',
  discount = 'discount',
  normal = 'normal',
}

export enum Categories {
  objects = 'objects',
  food = 'food',
  healthy = 'healthy',
}
