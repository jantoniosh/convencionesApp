import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    logoSrc: string = "assets/images/logo.png";
    logoAlt: string = 'logo';
    activo: boolean = false;
    constructor() { }

    ngOnInit(): void { }

    ctrlBarra() {
        this.activo = !this.activo;
        const bodyElement = document.body;
        if (this.activo) {
            bodyElement.classList.add('menuactive');
        }
        else {
            bodyElement.classList.remove('menuactive');
        }
    }
}
