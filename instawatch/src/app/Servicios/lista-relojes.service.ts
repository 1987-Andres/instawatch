import { Injectable } from '@angular/core';
import { RELOJES } from '../componentes/db/relojes.db';
import { Reloj } from '../componentes/interfaces/lista_relojes.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaRelojesService {

  constructor() { }


  getAll(): Reloj[] {
    return RELOJES;
  }

}
