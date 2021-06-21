import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../componentes/interfaces/lista_posts.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:3000/api/foro/";

  getAll(): Promise<Post[]> {

    // GET http://localhost:3000/watches

    return this.httpClient.get<Post[]>(this.baseUrl).toPromise();
  }
}
