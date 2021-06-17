import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:3000/api/watches/";

  getAll(): Promise<any> {

    // GET http://localhost:3000/watches

    return this.httpClient.get(this.baseUrl).toPromise();
  }

  filterByMarca(pMarca: string): Promise<any> {
    return this.httpClient.get(this.baseUrl + pMarca).toPromise();
  };
}


// filterByletra(){

// }
