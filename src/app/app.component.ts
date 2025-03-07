import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // imports: [CommonModule],
})
export class AppComponent {
  title = 'nba-teams';
  isDarkMode = false; // Variable para el modo oscuro

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
