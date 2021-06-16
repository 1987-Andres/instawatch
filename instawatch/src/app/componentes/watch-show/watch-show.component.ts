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

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().then(response => {
      this.relojes = response;
    })
      .catch(error => console.log(error));
  }

  // onChange($event) {
  //   if ($event.target.value === 'todos') {
  //     this.relojes = this.api.getAll();
  //   } else {
  //     this.relojes = this.listaRelojesService.filterByMarca($event.target.value);
  //   }
  // }


  // onKeyUp($event) {
  //   if ($event.target.value !== '') {
  //     this.relojes = this.listaRelojesService.filterByletra($event.target.value);
  //   } else {
  //     this.relojes = this.listaRelojesService.getAll();
  //   }
  // }

}