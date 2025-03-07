import { Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  { path: '', component: TeamListComponent }, // Página principal con la lista de equipos
  { path: 'team/:id', component: TeamDetailsComponent }, // Página de detalles de un equipo
];
