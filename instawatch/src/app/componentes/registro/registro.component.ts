import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UsersService } from 'src/app/Servicios/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]),
      direccion: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      sexo: new FormControl('', [
        Validators.required
      ]),
      fecha_nacimiento: new FormControl('', [
        Validators.required
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

  async onSubmit() {
    const response = await this.usersService.registrar(this.formulario.value);
    console.log(response);
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
