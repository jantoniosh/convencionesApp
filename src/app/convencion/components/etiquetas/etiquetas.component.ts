import { Component, OnInit } from '@angular/core';
import { Etiqueta } from '../../interfaces/etiqueta';

@Component({
    selector: 'app-etiquetas',
    templateUrl: './etiquetas.component.html',
    styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {

    selectedEtiquetas: Etiqueta[] = [];

    etiquetas: Etiqueta[] = [
        { id: 1, texto: 'ViolenciaVsMujeres' },
        { id: 2, texto: 'DefinicionDeViolencia' },
        { id: 3, texto: 'ViolenciaEnRazonDeGenero' },
        { id: 4, texto: 'ViolenciaPorRazonDeGenero' },
        { id: 5, texto: 'IgualdadYNoDiscriminacion' },
        { id: 6, texto: 'ViolenciaYDiscriminacion' },
        { id: 7, texto: 'Convencionbdparticulo2' },
        { id: 8, texto: 'cedawarticulo1' },
        { id: 9, texto: 'TiposDeViolencia' },
        { id: 10, texto: 'ModalidadesDeLaViolencia' },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
