import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EntradaService } from '../../services/convencion.service';
import { Entrada } from '../../interfaces/entrada.interface';

@Component({
    selector: 'app-sidebarresultados',
    templateUrl: './sidebarresultados.component.html'
})
export class SidebarresultadosComponent implements OnInit {

    @Input('titulo') titulo: string = "";
    entradas: Entrada[] = [];

    constructor(private entradaService: EntradaService) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        const observerEntrada = {
            next: (entradas: Entrada[]) => {
                this.entradas = entradas;
                console.log(this.entradas);
            },
            error: (err: Error) => {
                this.entradas = [];
            }
        }
        this.entradaService
            .buscarTitulo(this.titulo)
            .subscribe(observerEntrada);
    }

    getRutaConvencion(convencion: string) {
        if (convencion == "Belém do Pará") {
            return "/belem-do-para";
        }
        else if (convencion == "CEDAW") {
            return "/cedaw";
        }
        return "";
    }

    getRutaCategoria(categoria: string) {
        if (categoria == "Podcast") {
            return "/categoria/podcast";
        }
        else if (categoria == "Ficha") {
            return "/categoria/ficha";
        }
        else if (categoria == "Infografía") {
            return "/categoria/infografia";
        }
        return "";
    }
}
