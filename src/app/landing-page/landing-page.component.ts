import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 15000,
          poster: 'https://picsum.photos/id/230/200/300'
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2024-09-16'),
          precio: 2500,
          poster: 'https://picsum.photos/id/231/200/300'
        },
        {
          titulo: 'Iron-Man',
          fechaLanzamiento: new Date(),
          precio: 35000,
          poster: 'https://picsum.photos/id/232/200/300'
        }
      ];

      this.peliculasProximosEstrenos = [
        {
          titulo: 'Inception',
          fechaLanzamiento: new Date('2010-07-16'),
          precio: 12000,
          poster: 'https://picsum.photos/id/233/200/300'
        },
        {
          titulo: 'The Matrix',
          fechaLanzamiento: new Date('1999-03-31'),
          precio: 20000,
          poster: 'https://picsum.photos/id/234/200/300'
        },
        {
          titulo: 'The Dark Knight',
          fechaLanzamiento: new Date('2008-07-18'),
          precio: 18000,
          poster: 'https://picsum.photos/id/235/200/300'
        },
        {
          titulo: 'Avatar',
          fechaLanzamiento: new Date('2009-12-18'),
          precio: 25000,
          poster: 'https://picsum.photos/id/236/200/300'
        },
        {
          titulo: 'Jurassic Park',
          fechaLanzamiento: new Date('1993-06-11'),
          precio: 15000,
          poster: 'https://picsum.photos/id/237/200/300'
        }
      ];
    }, 100);
  }

  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];
}
