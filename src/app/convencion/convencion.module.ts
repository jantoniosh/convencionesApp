import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { BelemComponent } from './pages/belem/belem.component';
import { CedawComponent } from './pages/cedaw/cedaw.component';
import { DescripcionConvencionComponent } from './components/descripcion-convencion/descripcion-convencion.component';
import { MostrarMaterialesComponent } from './components/mostrar-materiales/mostrar-materiales.component';
import { ErrorComponent } from './pages/error/error.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { EtiquetasComponent } from './components/etiquetas/etiquetas.component';
import { BuscaretiquetasComponent } from './pages/buscaretiquetas/buscaretiquetas.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CreditosComponent } from './pages/creditos/creditos.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BelemComponent,
    CedawComponent,
    DescripcionConvencionComponent,
    MostrarMaterialesComponent,
    ErrorComponent,
    BusquedaComponent,
    HomeComponent,
    EntradaComponent,
    BuscarComponent,
    CategoriaComponent,
    EtiquetasComponent,
    BuscaretiquetasComponent,
    CreditosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ConvencionModule { }
