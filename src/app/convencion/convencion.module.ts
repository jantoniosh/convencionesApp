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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BelemComponent,
    CedawComponent,
    DescripcionConvencionComponent,
    MostrarMaterialesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ConvencionModule { }