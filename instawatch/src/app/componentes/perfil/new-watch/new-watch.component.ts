import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WatchService } from 'src/app/Servicios/watch.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-watch',
  templateUrl: './new-watch.component.html',
  styleUrls: ['./new-watch.component.css']
})
export class NewWatchComponent implements OnInit {

  formulario: FormGroup;
  watches: any

  constructor(private watchService: WatchService, private router: Router) {

    this.formulario = new FormGroup({
      watch_brand: new FormControl('', [
        Validators.required
      ]),
      watch_model: new FormControl('', [
        Validators.required
      ]),
      owner: new FormControl('', [
        Validators.required
      ]),
      availability: new FormControl('', [
        Validators.required
      ]),
      notes: new FormControl('', [
        Validators.required
      ]),
      movement: new FormControl('', [
        Validators.required
      ]),
      material: new FormControl('', [
        Validators.required
      ]),
      dial_color: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
    })
  }
  ngOnInit(): void {

  }

  async onClick(formulario) {
    const response = await this.watchService.create(formulario.value)
    this.router.navigate(['perfil/collection']);
    Swal.fire('Reloj añadido', 'Pasate a ver todos tus relojes', 'success');
  }

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }
}