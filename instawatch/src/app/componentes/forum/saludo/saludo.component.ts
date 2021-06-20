import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/Servicios/forum.service';
import { Post } from '../../interfaces/lista_posts.interface';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  posts: any[];
  saludo: any;

  constructor(private forumService: ForumService) {
    this.posts = []
  }

  async ngOnInit() {
    this.posts = await this.forumService.getAll()
    console.log(this.posts);

  }
}
