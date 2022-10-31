import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = environment.URL + 'personas/';

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<persona> {
    //Observable sirve para hacer las peticiones asincronas
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}
