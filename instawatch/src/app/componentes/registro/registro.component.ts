import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      email: new FormControl('', [
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ]),
      repite_password: new FormControl('')
    }, [this.passwordRepeatValidator]);
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
    console.log(this.formulario.value);
  }

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }

  dniValidator(control) {

    // const dni = control.value;
    // DESTRUCTURING
    const { value: dni } = control;
    const relLetras = 'TRWAGMYFPDXBNJZSQVHLCKET'.split('');

    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
      const numero = dni.substr(0, dni.length - 1);
      const letra = dni.substr(dni.length - 1, 1);

      if (letra.toUpperCase() !== relLetras[numero % 23]) {
        return { dnivalidator: 'La letra no se corresponde' };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: 'El formato es incorrecto' };
    }
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
