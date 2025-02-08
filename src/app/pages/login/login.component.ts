import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from '../../shared/components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  imports: [InputComponent, MatButtonModule, RouterLink],
})
export default class LoginComponent {}
