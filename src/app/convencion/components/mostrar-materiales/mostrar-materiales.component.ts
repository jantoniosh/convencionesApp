import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from '../../interfaces/entrada.interface';
import { EntradaService } from '../../services/convencion.service';
import { Seccion } from '../../interfaces/seccion.interface';

@Component({
    selector: 'app-mostrar-materiales',
    templateUrl: './mostrar-materiales.component.html'
})
export class MostrarMaterialesComponent implements OnInit {

    coverImg: string = "assets/images/materialuno.jpg";
    descargarSrc: string = "assets/images/descargar.png";
    descargarAlt: string = "descargar";
    compartirSrc: string = "assets/images/compartir.png";
    compartirAlt: string = "compartir";
    hayError: boolean = false;
    termino: string = "";

    @Input('seccion') seccion: Seccion = {
        titulo: '',
        detalle: false,
        color: '',
        noElementos: 0,
        boton: false,
        entradas: []
    }

    constructor(private entradaService: EntradaService) { }

    ngOnInit(): void {
    }

    getClassOf() {
        if (this.seccion.color === "Verde") {
            return "block-content multiple materiales home";
        }
        else if (this.seccion.color === "Morado") {
            return "block-content materiales podcast home";
        }
        else if (this.seccion.color === "Azul") {
            return "block-content materiales info home";
        }
        return "";
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
