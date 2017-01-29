import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(trendingHeroes => this.heroes = trendingHeroes.slice(0,5));
  }

}
