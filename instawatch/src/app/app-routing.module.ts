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
import { FormularioComponent } from './Componentes/Forum/formulario/formulario.component';
import { PresentacionesComponent } from './Componentes/Forum/presentaciones/presentaciones.component';
import { DudillasComponent } from './Componentes/Forum/dudillas/dudillas.component';
import { NovedadesComponent } from './Componentes/Forum/novedades/novedades.component';
import { CompraventaComponent } from './Componentes/Forum/compraventa/compraventa.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { NewWatchComponent } from './componentes/perfil/new-watch/new-watch.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrusel', component: CarruselComponent },
  { path: 'watch-card', component: WatchCardComponent },
  { path: 'watch-show', component: WatchShowComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forum/presentaciones', component: PresentacionesComponent },
  { path: 'forum/dudillas', component: DudillasComponent },
  { path: 'forum/compraventa', component: CompraventaComponent },
  { path: 'forum/novedades', component: NovedadesComponent },
  { path: 'forum/formulario', component: FormularioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfil/newwatch', component: NewWatchComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }