import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [{
  path: 'personajes',
  component: PersonajesComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
