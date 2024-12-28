import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { TabData } from '../../shared/components/tab/tab.interface';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { FormsModule } from '@angular/forms';
import { AccordionListComponent } from '../../shared/components/accordion-list/accordion-list.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TabComponent, FormsModule, AccordionListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tabs = signal([
    { label: `Ta'lim`, id: 1 },
    { label: 'Following', id: 2 },
  ]);
  activeTab = signal<string>('');

  onTabsChange(tab: TabData): void {
    console.log('Ilvoldim, bratim: ', tab);
    this.activeTab.set(tab.label);
  }
}
