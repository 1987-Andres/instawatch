import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reloj } from '../componentes/interfaces/lista_relojes.interface';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:3000/api/watches/";

  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.baseUrl, httpOptions).toPromise();
  }


  create(pWatch: Reloj) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.baseUrl, pWatch, httpOptions).toPromise();
  }

  getByMarca(pMarca): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.baseUrl + pMarca, httpOptions).toPromise();
  }

  getByUser(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.baseUrl + "usuario", httpOptions).toPromise();
  }

  getById(pId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.baseUrl + pId, httpOptions).toPromise();
  }

}
