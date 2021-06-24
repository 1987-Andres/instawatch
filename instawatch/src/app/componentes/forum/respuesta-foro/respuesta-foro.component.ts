import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/Servicios/forum.service';
import { Post } from '../../interfaces/lista_posts.interface';
import { Respuesta } from '../../interfaces/lista_respuestas.interface';

@Component({
  selector: 'app-respuesta-foro',
  templateUrl: './respuesta-foro.component.html',
  styleUrls: ['./respuesta-foro.component.css']
})
export class RespuestaForoComponent implements OnInit {

  respuestas: Respuesta[];
  post: Post

  constructor(private forumService: ForumService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.post = await this.forumService.getById(params.id);
    })

  }

}


