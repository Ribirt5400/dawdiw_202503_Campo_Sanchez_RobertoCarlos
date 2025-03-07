import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Maneja la respuesta de la petición HTTP

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get('/assets/teams.json'); // Ruta correcta
  }
}
