import { Component, OnInit } from '@angular/core';
import { WatchService } from 'src/app/Servicios/watch.service';
import { Reloj } from '../../interfaces/lista_relojes.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  relojes: Reloj;

  constructor(private watchService: WatchService) { }

  async ngOnInit() {
    this.relojes = await this.watchService.getByUser();
  }
}