import { Component } from '@angular/core';
import { UIService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth0-ecommerce';
  cartIsOpened$ = this.uiService.selectCart$();
  constructor(private uiService: UIService) {}
}
