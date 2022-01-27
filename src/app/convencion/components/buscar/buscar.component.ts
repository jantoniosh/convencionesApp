import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscar() {
    this.router.navigate(['/busqueda'], {queryParams: {contenido: this.titulo.value}});
  }

  reset() {
    console.log(this.titulo.value);
    this.busqueda = false;
  }
}
