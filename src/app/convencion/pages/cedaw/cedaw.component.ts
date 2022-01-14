import { Component } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';

@Component({
  selector: 'app-cedaw',
  templateUrl: './cedaw.component.html'
})
export class CedawComponent {
  clase: string = "block-top-content cedaw convencion";
  titulo: string = "CEDAW";
  subtitulo: string = "Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer";
  imagenUrl: string = "assets/images/portadados.png";
  imagenAlt: string = "portada dos";
  descripcion: string = `La Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer
  (CETFDCM; en inglés: Convention on the Elimination of all Forms of Discrimination Against Women,
  CEDAW) es un tratado internacional adoptado en 1979 por la Asamblea General de las Naciones
  Unidas.`;
  convencion: string = "CEDAW";

  secciones: Seccion[] = [
    {
      titulo: 'Fichas',
      tipo: 'Fichas',
      detalle: false,
      color: 'Verde',
      noElementos: 4,
      boton: true
    },
    {
      titulo: 'Podcasts',
      tipo: 'Podcasts',
      color: 'Morado',
      detalle: false,
      noElementos: 4,
      boton: true
    },
    {
      titulo: 'Infografías',
      tipo: 'Infografías',
      detalle: false,
      color: 'Azul',
      noElementos: 4,
      boton: true
    }
  ];

  constructor() { }
}
