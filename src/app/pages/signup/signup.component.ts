import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from '../../shared/components';
import { DatepickerComponent } from '../../shared/components/datepicker/datepicker.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrl: 'signup.component.scss',
  imports: [InputComponent, MatButtonModule, DatepickerComponent, RouterLink],
})
export default class SignupComponent {
  readonly ageRestrictions = {
    max: new Date('01/01/2010'),
    min: new Date('01/01/1950'),
  };
}
