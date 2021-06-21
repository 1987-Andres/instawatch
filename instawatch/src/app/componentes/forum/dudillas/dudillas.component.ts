import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Servicios/forum.service';

@Component({
  selector: 'app-dudillas',
  templateUrl: './dudillas.component.html',
  styleUrls: ['./dudillas.component.css']
})
export class DudillasComponent implements OnInit {

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
