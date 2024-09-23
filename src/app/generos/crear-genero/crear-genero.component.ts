import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-genero',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {
  private router = inject(Router);
  
  guardarCambios(genero: GeneroCreacionDTO){
    //this.router.navigate(['/generos']);
    console.log('Creando el género', genero);
  }
}
