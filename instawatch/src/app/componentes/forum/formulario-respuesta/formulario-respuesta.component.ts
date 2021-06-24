import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/app/Servicios/forum.service';
import { Post } from '../../interfaces/lista_posts.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-respuesta',
  templateUrl: './formulario-respuesta.component.html',
  styleUrls: ['./formulario-respuesta.component.css']
})
export class FormularioRespuestaComponent implements OnInit {

  formulario: FormGroup;
  posts: any;
  post: Post;

  constructor(private forumService: ForumService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.post = await this.forumService.getById(params.id)
      this.formulario = new FormGroup({
        fk_post: new FormControl(this.post.id, [
          Validators.required
        ]),
        descripcion: new FormControl('', [
          Validators.required
        ])
      })

    })
  }
  onSubmit() {
    this.forumService.createRespuesta(this.formulario.value)
      .then(response => {
        this.router.navigate(['foro']);
        Swal.fire('Respuesta publicada', 'Continua en el foro', 'success');
        console.log(response);
      })
      .catch(error => console.log(error));
  }


  checkControl(controldirection, validatordirection) {
    return this.formulario.get(controldirection).hasError(validatordirection) && this.formulario.get(controldirection).touched;
  }

}