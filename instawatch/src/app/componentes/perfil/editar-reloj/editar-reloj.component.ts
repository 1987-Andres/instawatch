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
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
      ]),
      apellidos: new FormControl('', [
      ]),
      email: new FormControl('', [
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]),
      direccion: new FormControl('', [
      ]),
      sexo: new FormControl('', [
      ]),
      fecha_nacimiento: new FormControl('', [
      ]),
      imagen: new FormControl('', [
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
      ]),
      repite_password: new FormControl('')
    }, [Validators.required, this.passwordRepeatValidator]);
  }

  ngOnInit(): void {
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
