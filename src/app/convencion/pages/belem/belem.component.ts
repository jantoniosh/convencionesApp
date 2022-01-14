import { Component } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';

@Component({
  selector: 'app-belem',
  templateUrl: './belem.component.html'
})
export class BelemComponent {

  clase: string = "block-top-content belem convencion";
  titulo: string = "Belén do Pará";
  subtitulo: string = "Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer";
  imagenUrl: string = "assets/images/portadauno.png";
  imagenAlt: string = "portada uno";
  descripcion: string = "La Convención de Belém do Pará, establece por primera vez el derecho de las mujeres a vivir una vida libre de violencia. Este tratado interamericano de derechos humanos ha dado pauta para la adopción de leyes y políticas sobre prevención, erradicación y sanción de la violencia contra las mujeres en los Estados Parte de la Convención."

  convencion: string = "Belén do Pará";

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
