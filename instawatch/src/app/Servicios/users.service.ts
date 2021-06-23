import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users';
  }

  registrar(formValues) {
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise();
  }

  login(formValues) {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();
  }

  getById(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.baseUrl + "/perfil/", httpOptions).toPromise();
  }

  update(formValues) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.baseUrl + "/perfil/", formValues, httpOptions).toPromise();
  }
}
