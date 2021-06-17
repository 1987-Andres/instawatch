import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { WatchCardComponent } from './componentes/watch-card/watch-card.component';
import { WatchShowComponent } from './componentes/watch-show/watch-show.component';
import { ForumComponent } from './componentes/forum/forum.component';
import { SaludoComponent } from './componentes/forum/saludo/saludo.component';
import { NewArrivalComponent } from './componentes/forum/new-arrival/new-arrival.component';
import { CompraVentaComponent } from './componentes/forum/compra-venta/compra-venta.component';
import { DudasComponent } from './componentes/forum/dudas/dudas.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrusel', component: CarruselComponent },
  { path: 'watch-card', component: WatchCardComponent },
  { path: 'watch-show', component: WatchShowComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forum/saludo', component: SaludoComponent },
  { path: 'forum/dudas', component: DudasComponent },
  { path: 'forum/compraventa', component: CompraVentaComponent },
  { path: 'forum/newarrival', component: NewArrivalComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }