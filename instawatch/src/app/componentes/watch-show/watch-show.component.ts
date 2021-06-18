import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';
import { Reloj } from '../interfaces/lista_relojes.interface';


@Component({
  selector: 'app-watch-show',
  templateUrl: './watch-show.component.html',
  styleUrls: ['./watch-show.component.css']
})
export class WatchShowComponent implements OnInit {

  relojes: Reloj[];
  marcas: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getAll().then(response => {
      this.relojes = response;
      let marcas = this.relojes.map(reloj => reloj.watch_brand.toLowerCase())
      this.marcas = new Set(marcas)

    })
      .catch(error => console.log(error));
  }

  async onChange($event) {
    console.log($event.target.value);

    if ($event.target.value === 'todos') {
      this.relojes = await this.apiService.getAll();
    } else {
      this.relojes = await this.apiService.filterByMarca($event.target.value);
    }
  }


  // async onKeyUp($event) {
  //   if ($event.target.value !== '') {
  //     this.relojes = await this.apiService.filterByletra($event.target.value);
  //   } else {
  //     this.relojes = await this.apiService.getAll();
  //   }
  // }

}