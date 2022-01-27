import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

    titulo: string = "";
    busqueda: boolean = false;

    seccion: Seccion = {
        titulo: 'Resultados',
        detalle: true,
        color: 'Verde',
        noElementos: 0,
        boton: true,
        entradas: []
    };

    constructor(private Activatedroute: ActivatedRoute, private entradaService: EntradaService) { }

    ngOnInit(): void {
        this.Activatedroute.queryParams
            .subscribe(params => {
                console.log(params["contenido"]);
                this.titulo = params["contenido"];
                const observerEntrada = {
                    next: (entradas: Entrada[]) => {
                        this.seccion = {
                            titulo: `Resultados: ${this.titulo}`,
                            detalle: true,
                            color: 'Verde',
                            noElementos: 4,
                            boton: true,
                            entradas: entradas
                        };
                        this.hideBarra();
                    },
                    error: (err: Error) => {
                        this.seccion = {
                            titulo: 'No se han encontrado resultados de tu búsqueda, vuelve a intentarlo',
                            detalle: false,
                            color: 'Verde',
                            noElementos: 0,
                            boton: false,
                            entradas: []
                        };
                        this.hideBarra();
                    }
                }
                this.entradaService
                    .buscarTitulo(this.titulo)
                    .subscribe(observerEntrada);
            }
            );
    }

    hideBarra() {
        window.scroll(0, 0);
        const bodyElement = document.body;
        bodyElement.classList.remove('menuactive');
    }
}
