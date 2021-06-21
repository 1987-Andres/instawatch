import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Servicios/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  async onSubmit(formValues) {
    console.log(formValues);
    const response = await this.usersService.login(formValues);
    console.log(response);
  }
}
