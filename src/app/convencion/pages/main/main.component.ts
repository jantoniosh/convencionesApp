import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

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
            detalle: true,
            color: 'Azul',
            noElementos: 4,
            boton: false,
            entradas: []
        },
        {
            titulo: 'Selección de materiales',
            detalle: true,
            color: 'Verde',
            noElementos: 12,
            boton: false,
            entradas: []
        }
    ];

    constructor(private entradaService: EntradaService) { }

    ngOnInit(): void {
        const observerEntrada0 = {
            next: (entradas: Entrada[]) => {
                console.log(entradas);
                this.secciones[0].entradas = entradas;
            },
            error: (err: Error) => {
                this.secciones[0].entradas = [];
            }
        }
        this.entradaService
            .buscarEntradas()
            .subscribe(observerEntrada0);

        const observerEntrada1 = {
            next: (entradas: Entrada[]) => {
                console.log(entradas);
                this.secciones[1].entradas = entradas;
            },
            error: (err: Error) => {
                this.secciones[1].entradas = [];
            }
        }
        this.entradaService
            .buscarEntradas()
            .subscribe(observerEntrada1);
    }

}
