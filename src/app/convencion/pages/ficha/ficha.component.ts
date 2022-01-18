import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html'
})
export class FichaComponent implements OnInit {
  
  ficha: string | null = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ficha = this.route.snapshot.paramMap.get("slug");
  }

}
