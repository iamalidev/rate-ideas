import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-datepicker',
  templateUrl: 'datepicker.component.html',
  providers: [provideNativeDateAdapter()],
  imports: [MatIconModule, MatInputModule, MatDatepickerModule],
  styles: [
    `
      .focused {
        @apply outline-blue-500 outline outline-1;
      }
    `,
  ],
})
export class DatepickerComponent {
  datepickerContainer = viewChild<ElementRef<HTMLDivElement>>(
    'datepickerContainer'
  );
  isPasswordHidden = signal(false);

  placeholder = input<string>('');
  max = input<Date | null>(null);
  min = input<Date | null>(null);

  onPasswordToggle(): void {
    this.isPasswordHidden.update((value) => !value);
  }

  onFocus(): void {
    this.datepickerContainer()?.nativeElement.classList.add('focused');
  }

  onBlur(): void {
    this.datepickerContainer()?.nativeElement.classList.remove('focused');
  }
}
