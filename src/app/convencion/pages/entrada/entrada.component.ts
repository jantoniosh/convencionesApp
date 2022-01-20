import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entrada } from '../../interfaces/entrada.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
    selector: 'app-entrada',
    templateUrl: './entrada.component.html'
})
export class EntradaComponent implements OnInit {

    clase: string = "block-top-content cedaw convencion";
    subtitulo: string = "Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer";
    imagenAlt: string = "portada uno";
    descripcion: string = "La Convención de Belém do Pará, establece por primera vez el derecho de las mujeres a vivir una vida libre de violencia. Este tratado interamericano de derechos humanos ha dado pauta para la adopción de leyes y políticas sobre prevención, erradicación y sanción de la violencia contra las mujeres en los Estados Parte de la Convención."

    slug: string | null = "";

    entrada: Entrada = {
        id: 0,
        titulo: "",
        convencion: "",
        categoria: "",
        descripcion: "",
        etiquetas: "",
        thumbnail: "",
        urlEntrada: "",
        urlContenido: ""
    };

    constructor(private entradaService: EntradaService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.slug = this.route.snapshot.paramMap.get("slug");

        const observerEntrada = {
            next: (entrada: Entrada) => {
                console.log(this.slug);
                this.entrada = entrada;
                console.log(this.entrada);
            },
            error: (err: Error) => {
                console.log(err);
                this.entrada = {
                    id: 0,
                    titulo: "",
                    convencion: "",
                    categoria: "",
                    descripcion: "",
                    etiquetas: "",
                    thumbnail: "",
                    urlEntrada: "",
                    urlContenido: ""
                };
            }
        }
        if (this.slug !== null) {
            this.entradaService.buscarEntrada(this.slug).subscribe(observerEntrada);
        }
    }

}
