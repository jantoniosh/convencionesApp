import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelemComponent } from './convencion/pages/belem/belem.component';
import { CedawComponent } from './convencion/pages/cedaw/cedaw.component';
import { MainComponent } from './convencion/pages/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'belem',
        component: BelemComponent
    },
    {
        path: 'cedaw',
        component: CedawComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
