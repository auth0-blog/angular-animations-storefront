import { Component } from '@angular/core';
import { UIService } from './core';
import { SlideRight } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideRight],
})
export class AppComponent {
  title = 'auth0-ecommerce';
  cartIsOpened$ = this.uiService.selectCart$();
  constructor(private uiService: UIService) {}
}
