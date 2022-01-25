import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

    slug: string | null = "";
    seccion: Seccion = {
        titulo: '',
        detalle: true,
        color: 'Verde',
        noElementos: 16,
        boton: true,
        entradas: []
    };

    constructor(private entradaService: EntradaService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.slug = this.route.snapshot.paramMap.get("slug");

        const observerEntrada = {
            next: (entradas: Entrada[]) => {
                this.seccion.entradas = entradas;
            },
            error: (err: Error) => {
                console.log(err);
                this.seccion.entradas = [];
            }
        }
        if (this.slug !== null) {
            console.log(this.slug);
            if (this.slug === "podcast") {
                this.entradaService.buscarPodcasts("*").subscribe(observerEntrada);
                this.seccion.titulo = "Podcasts";
            }
            else if (this.slug === "ficha") {
                this.entradaService.buscarFichas("*").subscribe(observerEntrada);
                this.seccion.titulo = "Fichas";
            }
            else if (this.slug === "infografia") {
                this.entradaService.buscarInfografias("*").subscribe(observerEntrada);
                this.seccion.titulo = "Infografías";
            }
        }
    }
}