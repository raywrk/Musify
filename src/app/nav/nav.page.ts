import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.page.html',
  styleUrls: ['nav.page.scss']
})
export class NavPage {

  selectedTab: string = 'home';

  constructor() {}

  onTabChange(event: any) {
    console.log(event);
    this.selectedTab = event.tab;
  }

  isSelected(tab: string): boolean {
    return this.selectedTab === tab;
  }

}
