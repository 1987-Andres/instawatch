import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servicios/api.service';
import { Reloj } from '../interfaces/lista_relojes.interface';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  relojes: Reloj[];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.relojes = await this.apiService.getAll();
    console.log(this.relojes);

  }

}
