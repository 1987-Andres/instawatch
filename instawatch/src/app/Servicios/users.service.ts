import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://registrate.ngrok.io';
  }

  getPremio() {
    // INCLUIR CABECERA DEL LOGIN
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': '6a9ca2c73a3f'
      })
    }
  }

  registrar(formValues) {
    return this.httpClient.post(`${this.baseUrl}/register`, formValues).toPromise();
  }

  login(formValues) {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();
  }

}
