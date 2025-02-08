import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

enum InputTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  imports: [MatIconModule],
  styles: [
    `
      .focused {
        @apply outline-blue-500 outline outline-1;
      }
    `,
  ],
})
export class InputComponent {
  inputContainer = viewChild<ElementRef<HTMLDivElement>>('inputContainer');
  isPasswordHidden = signal(false);

  type = input<'text' | 'password' | 'email'>(InputTypes.Text);
  placeholder = input<string>('');

  inputTypes = InputTypes;

  onPasswordToggle(): void {
    this.isPasswordHidden.update((value) => !value);
  }

  onFocus(): void {
    this.inputContainer()?.nativeElement.classList.add('focused');
  }

  onBlur(): void {
    this.inputContainer()?.nativeElement.classList.remove('focused');
  }
}
