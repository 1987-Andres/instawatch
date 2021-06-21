import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/Servicios/users.service';

declare var Swal;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usersService.login(this.formulario.value);
    console.log();
    if (response['error']) {
      Swal.fire('Error de login', response['error'], 'error');
    } else {
      Swal.fire('Login Correcto', 'Ya puedes disfrutar de la aplicación', 'success');
      // localStorage.setItem('token', response['token']);
    }
  }

}
