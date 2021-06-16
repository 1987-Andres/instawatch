import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reloj } from '../componentes/interfaces/lista_relojes.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:3000/api/watches";

  getAll(): Promise<any> {

    // GET http://localhost:3000/watches

    return this.httpClient.get(this.baseUrl).toPromise();
  }

  // filterByMarca(pMarca: string): Reloj[] {
  //   return RELOJES.filter((reloj) => {
  //     return reloj.marca.toLowerCase() === pMarca.toLowerCase();
  //   });
  // }

  // filterByletra(pLetra: string): Reloj[] {
  //   return RELOJES.filter((reloj) => {
  //     return reloj.marca.toLowerCase() === pLetra.toLowerCase()
  //   });
  // }


}
