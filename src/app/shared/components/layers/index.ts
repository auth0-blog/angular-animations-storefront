import { CartComponent } from './cart/cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartButtonComponent } from './product-details/cart-button/cart-button.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const LAYERS = [
  CartComponent,
  OrderConfirmationComponent,
  ProductDetailsComponent,
  CartButtonComponent,
];

export * from './cart/cart.component';
export * from './order-confirmation/order-confirmation.component';
export * from './product-details/product-details.component';
export * from './product-details/cart-button/cart-button.component';
