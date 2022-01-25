import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelemComponent } from './convencion/pages/belem/belem.component';
import { BusquedaComponent } from './convencion/pages/busqueda/busqueda.component';
import { CategoriaComponent } from './convencion/pages/categoria/categoria.component';
import { CedawComponent } from './convencion/pages/cedaw/cedaw.component';
import { EntradaComponent } from './convencion/pages/entrada/entrada.component';
import { MainComponent } from './convencion/pages/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'belem-do-para',
        component: BelemComponent
    },
    {
        path: 'cedaw',
        component: CedawComponent
    },
    {
        path: 'categoria/:slug',
        component: CategoriaComponent
    },
    {
        path: 'podcast/:slug',
        component: EntradaComponent
    },
    {
        path: 'ficha/:slug',
        component: EntradaComponent
    },
    {
        path: 'infografia/:slug',
        component: EntradaComponent
    },
    {
        path: 'busqueda',
        component: BusquedaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
