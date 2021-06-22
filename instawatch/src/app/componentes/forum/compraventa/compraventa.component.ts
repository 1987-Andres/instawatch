import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Servicios/forum.service';

@Component({
  selector: 'app-compraventa',
  templateUrl: './compraventa.component.html',
  styleUrls: ['./compraventa.component.css']
})
export class CompraventaComponent implements OnInit {

  posts: any[];

  constructor(private forumService: ForumService) {
    this.posts = []
  }

  async ngOnInit() {
    this.posts = await this.forumService.getByCategoria('compraventa')

  }
}
