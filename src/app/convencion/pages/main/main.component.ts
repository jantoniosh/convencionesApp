import { Component } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent {

    portadaBelemSrc: string = "assets/images/portadauno.png";
    portadaBelemAlt: string = "portada uno";
    portadaCedawSrc: string = "assets/images/portadados.png";
    portadaCedawAlt: string = "portada dos";
    descargarSrc: string = "assets/images/descargar.png";
    descargarAlt: string = "descargar";
    compartirSrc: string = "assets/images/compartir.png";
    compartirAlt: string = "compartir";
    convencion: string = "*";

    secciones: Seccion[] = [
        {
          titulo: 'Sugerencias semanales',
          tipo: '*',
          detalle: true,
          color: 'Azul',
          noElementos: 4,
          boton: false
        },
        {
          titulo: 'Selección de materiales',
          tipo: '*',
          detalle: true,
          color: 'Verde',
          noElementos: 12,
          boton: false
        }
    ];

    constructor() { }

}
