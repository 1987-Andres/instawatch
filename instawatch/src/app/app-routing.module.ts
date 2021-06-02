import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'carrusel', component: CarruselComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
