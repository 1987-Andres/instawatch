import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { HomeComponent } from './componentes/home/home.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WatchCardComponent } from './componentes/watch-card/watch-card.component';
import { WatchShowComponent } from './componentes/watch-show/watch-show.component';
import { HttpClientModule } from '@angular/common/http';
import { ForumComponent } from './componentes/forum/forum.component';
import { FormularioComponent } from './componentes/Forum/formulario/formulario.component';
import { CommonModule } from '@angular/common';
import { CompraventaComponent } from './componentes/Forum/compraventa/compraventa.component';
import { DudillasComponent } from './componentes/Forum/dudillas/dudillas.component';
import { NovedadesComponent } from './componentes/Forum/novedades/novedades.component';
import { PresentacionesComponent } from './componentes/Forum/presentaciones/presentaciones.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { NewWatchComponent } from './componentes/perfil/new-watch/new-watch.component';
import { CollectionComponent } from './componentes/perfil/collection/collection.component';
import { EditarRelojComponent } from './componentes/perfil/editar-reloj/editar-reloj.component';
import { RespuestaForoComponent } from './componentes/forum/respuesta-foro/respuesta-foro.component';
import { FormularioRespuestaComponent } from './componentes/forum/formulario-respuesta/formulario-respuesta.component';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HomeComponent,
    NoticiasComponent,
    RegistroComponent,
    LoginComponent,
    ContactoComponent,
    WatchCardComponent,
    WatchShowComponent,
    ForumComponent,
    FormularioComponent,
    CompraventaComponent,
    DudillasComponent,
    NovedadesComponent,
    PresentacionesComponent,
    PerfilComponent,
    NewWatchComponent,
    CollectionComponent,
    EditarRelojComponent,
    RespuestaForoComponent,
    FormularioRespuestaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
