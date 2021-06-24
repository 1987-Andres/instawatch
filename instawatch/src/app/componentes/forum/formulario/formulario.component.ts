import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForumService } from 'src/app/Servicios/forum.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  posts: any;

  constructor(private forumService: ForumService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      categoria: new FormControl('', [
        Validators.required,

      ])
    })
  }
  ngOnInit() {

  }

  async onClick(formulario) {
    this.posts = await this.forumService.createPost(formulario.value)
    console.log(this.posts);
  }

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }

}