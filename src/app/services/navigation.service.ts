import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService implements OnInit {
  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private showNavRight$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnInit() {}

  getShowNav() {
    return this.showNav$.asObservable();
  }

  setShowNav(showHide: boolean) {
    this.showNav$.next(showHide);
  }

  toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  isNavOpen() {
    return this.showNav$.value;
  }

  // right
  getShowNavRight() {
    return this.showNavRight$.asObservable();
  }

  setShowNavRight(showHide: boolean) {
    this.showNavRight$.next(showHide);
  }

  toggleNavStateRight() {
    this.showNavRight$.next(!this.showNavRight$.value);
  }

  isNavOpenRight() {
    return this.showNavRight$.value;
  }
}
