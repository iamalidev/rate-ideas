import { Component, input, output } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { TabData } from './tab.interface';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
  imports: [MatTabsModule],
})
export class TabComponent {
  tabs = input<TabData[]>([]);
  tabChange = output<TabData>();

  onTabChange(tab: MatTabChangeEvent): void {
    const selectedTab = this.tabs()[tab.index];
    this.tabChange.emit(selectedTab);
  }
}
