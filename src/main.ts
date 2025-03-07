import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';  // Importamos el componente raíz
import { routes } from './app/app.routes';  // Importamos las rutas
import { HeaderComponent } from './app/components/header/header.component';
import { TeamListComponent } from './app/components/team-list/team-list.component';
// import { TeamDetailsComponent } from './app/components/team-details/team-details.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Proporcionamos el cliente HTTP
    provideRouter(routes),  // Proporcionamos las rutas
  ]
});

bootstrapApplication(HeaderComponent).catch(err => console.error(err));  // Inicializamos el componente de cabecera
