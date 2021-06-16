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
import { ForumComponent } from './componentes/forum/forum.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
