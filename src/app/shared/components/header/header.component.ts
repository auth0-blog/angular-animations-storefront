import { Component } from '@angular/core';
import { BaseComponent, UIService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {
  searchQuery = '';

  constructor(private uiService: UIService) {
    super();
  }

  openCart(): void {
    this.uiService.toggleCart(true);
  }

  onSearch(keyword: string): void {
    this.uiService.search(keyword);
  }
}
