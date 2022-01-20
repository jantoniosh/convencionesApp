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

    // @Input('titulo') titulo: string = "";

    // @Input('color') color: string = "";

    // @Input('noElementos') noElementos: number = 0;

    // @Input('boton') boton: boolean = true;

    // @Input('detalle') detalle: boolean = true;

    // @Input('entradas') entradas: Entrada[] = [];

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

    getRuta(convencion: string) {
        if (convencion == "Belém do Pará") {
            return "belem";
        }
        else if (convencion == "CEDAW") {
            return "cedaw";
        }
        return "";
    }
}
