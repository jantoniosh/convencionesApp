import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  titulo = new FormControl('');
  busqueda: boolean = false;

  seccion: Seccion = {
    titulo: 'Resultados',
    detalle: true,
    color: 'Verde',
    noElementos: 12,
    boton: true,
    entradas: []
  };

  constructor(private entradaService: EntradaService) { }

  ngOnInit(): void {
  }

  buscar() {
    const observerEntrada = {
      next: (entradas: Entrada[]) => {
        console.log(entradas);
        this.seccion.entradas = entradas;
      },
      error: (err: Error) => {
        this.seccion.entradas = [];
      }
    }
    this.entradaService
      .buscarTitulo(this.titulo.value)
      .subscribe(observerEntrada);
    this.busqueda = true;
  }

  reset() {
    console.log(this.titulo.value);
    this.busqueda = false;
  }
}
