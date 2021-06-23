import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../componentes/interfaces/lista_posts.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:3000/api/foro/";

  getAll(): Promise<Post[]> {

    // GET http://localhost:3000/api/foro

    return this.httpClient.get<Post[]>(this.baseUrl).toPromise();
  }

  createPost(pPost: Post) {

    // GET http://localhost:3000/api/forum

    return this.httpClient.post(this.baseUrl, pPost).toPromise();
  }

  getByCategoria(pCategoria): Promise<any> {

    return this.httpClient.get(this.baseUrl + pCategoria).toPromise();
  }

  getById(pId): Promise<any> {

    return this.httpClient.get(this.baseUrl + "post/" + pId).toPromise();
  }


}
