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
import { FormularioComponent } from './componentes/Forum/formulario/formulario.component';
import { PresentacionesComponent } from './componentes/Forum/presentaciones/presentaciones.component';
import { DudillasComponent } from './componentes/Forum/dudillas/dudillas.component';
import { NovedadesComponent } from './componentes/Forum/novedades/novedades.component';
import { CompraventaComponent } from './componentes/Forum/compraventa/compraventa.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { NewWatchComponent } from './componentes/perfil/new-watch/new-watch.component';
import { CollectionComponent } from './componentes/perfil/collection/collection.component';
import { EditarRelojComponent } from './componentes/perfil/editar-reloj/editar-reloj.component';
import { RespuestaForoComponent } from './componentes/forum/respuesta-foro/respuesta-foro.component';
import { FormularioRespuestaComponent } from './componentes/forum/formulario-respuesta/formulario-respuesta.component';


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
  { path: 'perfil/collection', component: CollectionComponent },
  { path: 'perfil/edit', component: EditarRelojComponent },
  { path: 'forum/respuesta/:id', component: RespuestaForoComponent },
  { path: 'forum/formulario-respuesta/:id', component: FormularioRespuestaComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }