import { Component } from '@angular/core';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion-list',
  imports: [AccordionItemComponent],
  templateUrl: './accordion-list.component.html',
})
export class AccordionListComponent {}
