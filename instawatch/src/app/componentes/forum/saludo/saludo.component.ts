import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Servicios/forum.service';

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
