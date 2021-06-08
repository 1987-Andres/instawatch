import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { HomeComponent } from './componentes/home/home.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HomeComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
