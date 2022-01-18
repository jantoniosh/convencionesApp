import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelemComponent } from './convencion/pages/belem/belem.component';
import { CedawComponent } from './convencion/pages/cedaw/cedaw.component';
import { MainComponent } from './convencion/pages/main/main.component';
import { PodcastComponent } from './convencion/pages/podcast/podcast.component';

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
    {
        path: 'podcast/:slug',
        component: PodcastComponent
    },
    {
        path: 'ficha/:slug',
        component: PodcastComponent
    },
    {
        path: 'infografia/:slug',
        component: PodcastComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
