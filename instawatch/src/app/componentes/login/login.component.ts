import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Servicios/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(formValues) {
    const response = await this.usersService.login(formValues);
    if (response['error']) {
      console.log(response['error']);

      Swal.fire('Error de login', response['error'], 'error');

    } else {
      this.router.navigate(['perfil']);

      Swal.fire('Login Correcto', 'Ya puedes disfrutar Instawatch', 'success');
      localStorage.setItem('token', response['token']);

    }
  }

}
