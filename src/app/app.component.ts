import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = true;
  constructor(private navService: NavigationService) {}
  toggleSideNav() {
    this.value = false;
    this.navService.setShowNav(true);
  }
}
