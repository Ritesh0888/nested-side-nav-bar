import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav-right',
  templateUrl: './side-nav-right.component.html',
  styleUrls: ['./side-nav-right.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavRightComponent implements OnInit {
  showSideNav!: Observable<boolean>;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: string = 'right';

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNavRight();
  }

  onSidebarClose() {
    this.navService.setShowNavRight(false);
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};

    navBarStyle.transition =
      this.direction +
      ' ' +
      this.duration +
      's, visibility ' +
      this.duration +
      's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : this.navWidth * -1) + 'px';

    return navBarStyle;
  }
}
