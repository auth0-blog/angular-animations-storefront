import { from } from 'rxjs';
import { CARD_COMPONENTS } from './cards';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

export const COMPONENTS = [
  HeaderComponent,
  MenuComponent,
  CartComponent,
  OrderConfirmationComponent,
  ...CARD_COMPONENTS,
];

export * from './header/header.component';
export * from './menu/menu.component';
export * from './cart/cart.component';
export * from './order-confirmation/order-confirmation.component';
export * from './cards';
