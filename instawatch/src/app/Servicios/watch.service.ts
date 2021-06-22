import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reloj } from '../componentes/interfaces/lista_relojes.interface';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:3000/api/watches/";

  getAll(): Promise<any> {

    // GET http://localhost:3000/api/watches

    return this.httpClient.get(this.baseUrl).toPromise();
  }

  create(pWatch: Reloj) {

    // POST http://localhost:3000/api/watches

    return this.httpClient.post(this.baseUrl, pWatch).toPromise();
  }

  getByMarca(pMarca): Promise<any> {

    return this.httpClient.get(this.baseUrl + pMarca).toPromise();
  }
}
