import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://example.com/api/register'; // Reemplaza con la URL de tu API de registro

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, phone: string): Observable<any> {
    // Aquí puedes realizar la solicitud HTTP para registrar el usuario
    // Puedes usar HttpClient para hacer la solicitud POST a tu API
    return this.http.post<any>(this.apiUrl, { username, email, password, phone });
  }
}
