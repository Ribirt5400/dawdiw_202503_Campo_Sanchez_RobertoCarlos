import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/teams.service'; // Importamos el servicio de equipos
import { Router } from '@angular/router'; // Importa Router
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-team-list',
  standalone: true,
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  imports: [CommonModule], // Importa CommonModule aquí para usar ngClass
})
export class TeamListComponent implements OnInit {
  teams: any[] = [];
  isDarkMode = false; // Estado para controlar el modo oscuro

  constructor(
    private teamService: TeamService, // Inyecta TeamService para cargar los datos de los equipos
    private router: Router, // Inyecta Router para navegar a la ruta del equipo
    private darkModeService: DarkModeService // Inyecta DarkModeService para controlar el modo oscuro y claro de la página
  ) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((data) => {
      this.teams = data;
    });

    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode; // Actualiza el estado del modo oscuro
    });
  }

  // Método para manejar el clic en un equipo
  viewTeamDetails(teamId: number): void {
    // Recibe el ID del equipo
    console.log('Ver detalles del equipo con ID:', teamId);
    this.router.navigate(['/team', teamId]); // Navega a la ruta del equipo
  }
}
