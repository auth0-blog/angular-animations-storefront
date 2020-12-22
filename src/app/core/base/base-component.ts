import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Icons } from '../constants';

@Directive()
export class BaseComponent implements OnDestroy {
  icons = Icons;
  destroy$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
