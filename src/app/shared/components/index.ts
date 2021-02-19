import { from } from 'rxjs';
import { CARD_COMPONENTS } from './cards';
import { HeaderComponent } from './header/header.component';
import { LAYERS } from './layers';
import { MenuComponent } from './menu/menu.component';

export const COMPONENTS = [
  HeaderComponent,
  MenuComponent,
  ...LAYERS,
  ...CARD_COMPONENTS,
];

export * from './header/header.component';
export * from './menu/menu.component';
export * from './cards';
export * from './layers';
