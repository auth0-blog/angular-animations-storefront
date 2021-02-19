import { CartComponent } from './cart/cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const LAYERS = [
  CartComponent,
  OrderConfirmationComponent,
  ProductDetailsComponent,
];

export * from './cart/cart.component';
export * from './order-confirmation/order-confirmation.component';
export * from './product-details/product-details.component';
