// Código fuente del servicio de equipos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsUrl = 'assets/teams.json';  // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  // Método para obtener los equipos
  getTeams(): Observable<any[]> {
    return this.http.get<any[]>(this.teamsUrl);
  }
}