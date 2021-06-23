import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Servicios/forum.service';
import { Post } from '../../interfaces/lista_posts.interface';

@Component({
  selector: 'app-respuesta-foro',
  templateUrl: './respuesta-foro.component.html',
  styleUrls: ['./respuesta-foro.component.css']
})
export class RespuestaForoComponent implements OnInit {

  post: Post

  constructor(private forumService: ForumService) {
  }

  async ngOnInit() {
    this.post = await this.forumService.getById(6)
    console.log(this.post);

  }

}
