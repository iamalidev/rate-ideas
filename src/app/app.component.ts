import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, MatButtonModule],
})
export class AppComponent implements OnInit {
  iconsService = inject(IconService);

  ngOnInit(): void {
    this.iconsService.registerIcons();
  }
}