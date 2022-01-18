import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infografia',
  templateUrl: './infografia.component.html'
})
export class InfografiaComponent implements OnInit {
  
  infografia: string | null = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.infografia = this.route.snapshot.paramMap.get("slug");
  }
}
