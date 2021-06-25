import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Servicios/users.service';
import { Usuario } from '../interfaces/lista_usuarios.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;

  constructor(private usersService: UsersService) {

  }

  async ngOnInit() {
    this.usuario = await this.usersService.getById();
  }

}
