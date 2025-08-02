import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EarthComponent } from './pages/earth/earth.component';
import { MarsComponent } from './pages/mars/mars.component';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'earth', component: EarthComponent},
  {path: 'mars', component: MarsComponent},
  {path: 'asteroids', component: AsteroidsComponent},
  {path: '**', redirectTo: '/home'}
];
