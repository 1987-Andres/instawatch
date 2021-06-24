import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/Servicios/forum.service';
import { Post } from '../../interfaces/lista_posts.interface';

@Component({
  selector: 'app-respuesta-foro',
  templateUrl: './respuesta-foro.component.html',
  styleUrls: ['./respuesta-foro.component.css']
})
export class RespuestaForoComponent implements OnInit {

  post: Post

  constructor(private forumService: ForumService, private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    // parte dinamica de url
    this.post = await this.forumService.getById(6)

  }

}
