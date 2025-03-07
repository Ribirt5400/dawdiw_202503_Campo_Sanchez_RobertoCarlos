import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // El servicio está disponible en toda la aplicación
})
export class DarkModeService {
  private isDarkMode = new BehaviorSubject<boolean>(false); // Estado inicial: modo claro
  isDarkMode$ = this.isDarkMode.asObservable(); // Expone el estado como un Observable

  constructor() {}

  // Cambia entre modo claro y oscuro
  toggleDarkMode(): void {
    this.isDarkMode.next(!this.isDarkMode.value); // Cambia el estado
    this.updateBodyClass(); // Actualiza las clases del body
  }

  // Actualiza las clases del body según el modo
  private updateBodyClass(): void {
    if (this.isDarkMode.value) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }
}
