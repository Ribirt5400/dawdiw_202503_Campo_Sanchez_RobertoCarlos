import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  isHeaderFixed = false; // Estado para controlar si el header está fijo
  isDarkMode = false; // Estado para controlar el modo oscuro
  isMenuOpen = false; // Estado para controlar si el menú está abierto

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    // Suscríbete al estado del modo oscuro
    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  // Cambia entre modo claro y oscuro
  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  // Alternar la visibilidad del menú en pantallas pequeñas
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Escucha el evento de scroll para fijar el header
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isHeaderFixed = scrollTop > 0; // Fija el header si el scroll es mayor que 0
  }
}
