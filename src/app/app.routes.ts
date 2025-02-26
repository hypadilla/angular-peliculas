import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes } from '@angular/router';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'generos', component: IndiceGenerosComponent},
    {path: 'generos/crear', component: CrearGeneroComponent},
    {path: 'generos/editar/:id', component: EditarGeneroComponent},

    {path: 'actores', component: IndiceActoresComponent},
    {path: 'actores/crear', component: CrearActorComponent},
    {path: 'actores/editar/:id', component: EditarActorComponent},

    {path: 'cines/crear', component: CrearCineComponent},
    {path: 'cines', component: IndiceCinesComponent},
    {path: 'cines/editar/:id', component: EditarCineComponent},
    
    {path: 'peliculas/crear', component: CrearPeliculaComponent},
    {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
   
    {path: '**', redirectTo: ''}


];
