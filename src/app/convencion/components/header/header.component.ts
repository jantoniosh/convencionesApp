import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    logoSrc: string = "";
    logoAlt: string = "";
    constructor() { }

    ngOnInit(): void {
        this.logoSrc = "assets/images/logo.png";
        this.logoAlt = 'logo';
    }

}
