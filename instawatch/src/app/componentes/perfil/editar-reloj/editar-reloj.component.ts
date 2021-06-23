import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { UsersService } from 'src/app/Servicios/users.service';

declare var Swal;

@Component({
  selector: 'app-editar-reloj',
  templateUrl: './editar-reloj.component.html',
  styleUrls: ['./editar-reloj.component.css']
})
export class EditarRelojComponent implements OnInit {
  formulario: FormGroup;
  constructor(private userService: UsersService, private router: Router) {

  }

  async ngOnInit() {
    const usuario = await this.userService.getById()
    this.formulario = new FormGroup({
      nombre: new FormControl(usuario.nombre, [
      ]),
      apellidos: new FormControl(usuario.apellidos, [
      ]),
      email: new FormControl(usuario.email, [
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]),
      direccion: new FormControl(usuario.direccion, [
      ]),
      sexo: new FormControl(usuario.sexo, [
      ]),
      fecha_nacimiento: new FormControl(usuario.fecha_nacimiento, [
      ]),
      imagen: new FormControl(usuario.imagen, [
      ]),
    })
    const control = this.formulario.get('email');
    control
      .valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
        console.log(value);
      });
  }

  onSubmit() {
    this.userService.update(this.formulario.value)
      .then(response => {
        console.log(response);

        if (response['affectedRows'] === 1) {
          this.router.navigate(['perfil']);
          this.formulario.reset();
        }

        if (response['error']) {
          Swal.fire(
            'Error al editar!',
            response['error'],
            'error'
          )
        }

      })
      .catch(error => console.log(error));
  }



  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }

  passwordRepeatValidator(form) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('repite_password').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      return { passwordrepeatvalidator: true };
    }
  }

}
