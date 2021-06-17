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

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getAll().then(response => {
      this.relojes = response;
      console.log(this.relojes);

    })
      .catch(error => console.log(error));
  }

  async onChange($event) {
    let data = [this.relojes]; //"TAG Heuer", "Rolex", "Omega", "Rolex", "Omega", "Xiaomi", "Windows", "Apple"

    const dataArr = new Set(data);

    let result = [...dataArr];

    console.log(result);

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