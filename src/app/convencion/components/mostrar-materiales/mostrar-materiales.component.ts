import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from '../../interfaces/entrada.interface';
import { EntradaService } from '../../services/convencion.service';

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
  entradas: Entrada[] = [];
  termino: string = "";

  @Input('tipo') tipo: string = "";

  @Input('titulo') titulo: string = "";

  @Input('color') color: string = "";

  @Input('noElementos') noElementos: number = 0;

  @Input('boton') boton: boolean = true;

  @Input('detalle') detalle: boolean = true;

  @Input('convencion') convencion: string = "";

  constructor(private entradaService: EntradaService) {
  }

  ngOnInit(): void {
    this.hayError = false;
    console.log(this.convencion);

    const observerEntrada = {
      next: (entradas: Entrada[]) => {
        console.log(entradas);
        this.entradas = entradas;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.entradas = [];
      }
    }

    if (this.tipo === "*") {
      this.entradaService.buscarEntradas()
        .subscribe(observerEntrada);
    }
    else {
      if (this.tipo === "Fichas") {
        this.entradaService.buscarFichas(this.convencion)
          .subscribe(observerEntrada);
      }
      else if (this.tipo === "Podcasts") {
        this.entradaService.buscarPodcasts(this.convencion)
          .subscribe(observerEntrada);
      }
      else if (this.tipo === "Infografías") {
        this.entradaService.buscarInfografias(this.convencion)
          .subscribe(observerEntrada);

      }
    }
  }

  getClassOf() {
    if (this.color === "Verde") {
      return "block-content multiple materiales";
    }
    else if (this.color === "Morado") {
      return "block-content multiple materiales podcast";
    }
    else if (this.color === "Azul") {
      return "block-content multiple materiales info";
    }
    return "";
  }
}
