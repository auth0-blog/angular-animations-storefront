import { from } from 'rxjs';
import { CARD_COMPONENTS } from './cards';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

export const COMPONENTS = [
  HeaderComponent,
  MenuComponent,
  CartComponent,
  ...CARD_COMPONENTS,
];

export * from './header/header.component';
export * from './menu/menu.component';
export * from './cart/cart.component';
export * from './cards';
