import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion-convencion',
  templateUrl: './descripcion-convencion.component.html'
})
export class DescripcionConvencionComponent {

  descargarSrc: string = "assets/images/descargar.png";
  descargarAlt: string = "descargar";
  compartirSrc: string = "assets/images/compartir.png";
  compartirAlt: string = "compartir";

  @Input('clase')
  clase: string = "";

  @Input('titulo')
  titulo: string = "";

  @Input('subtitulo')
  subtitulo: string = "";

  @Input('imagenUrl')
  imagenUrl: string = "";

  @Input('imagenAlt')
  imagenAlt: string = "";

  @Input('descripcion')
  descripcion: string = "";

  constructor() { }
}
