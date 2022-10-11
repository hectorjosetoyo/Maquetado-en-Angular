import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HysComponent } from './components/hys/hys.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'about', component: AcercaDeComponent },
  { path: 'skills', component: HysComponent },
  { path: 'projects', component: ProyectosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /*imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "ignore",
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
