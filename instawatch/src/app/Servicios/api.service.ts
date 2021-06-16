import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    // GET http://localhost:3000/watches

    return this.httpClient.get('http://localhost:3000/api/watches').toPromise();
  }


}
