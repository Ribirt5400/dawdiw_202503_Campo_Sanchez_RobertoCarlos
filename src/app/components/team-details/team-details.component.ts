import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/teams.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-team-details',
  standalone: true, // Asegúrate de que el componente es standalone
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent implements OnInit {
  team: any; // Datos del equipo
  isDarkMode = false; // Estado para controlar el modo oscuro

  constructor(
    private route: ActivatedRoute, // Para obtener el parámetro de la URL
    private teamService: TeamService, // Para cargar los datos del equipo
    private darkModeService: DarkModeService // Para controlar el modo oscuro y claro de la página
  ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id'); // Obtén el ID de la URL
    if (teamId) {
      this.teamService.getTeams().subscribe((teams) => {
        this.team = teams.find((team) => team.id === +teamId); // Encuentra el equipo por ID
      });
    }

    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode; // Actualiza el estado del modo oscuro
      console.log('Modo oscuro:', isDarkMode);
    });
  }
}
