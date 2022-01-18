import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html'
})
export class PodcastComponent implements OnInit {

  podcast: string | null = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.podcast = this.route.snapshot.paramMap.get("slug");
  }

}
