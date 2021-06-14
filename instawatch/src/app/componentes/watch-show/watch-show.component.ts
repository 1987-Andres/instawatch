import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaRelojesService } from 'src/app/Servicios/lista-relojes.service';
import { Reloj } from '../interfaces/lista_relojes.interface';


@Component({
  selector: 'app-watch-show',
  templateUrl: './watch-show.component.html',
  styleUrls: ['./watch-show.component.css']
})
export class WatchShowComponent implements OnInit {

  relojes: Reloj[];

  constructor(private activatedRoute: ActivatedRoute, private listaRelojesService: ListaRelojesService) { }

  ngOnInit(): void {
    this.relojes = this.listaRelojesService.getAll();
  }

}
