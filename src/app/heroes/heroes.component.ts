import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../hero';
import { HeroList } from './../heroList';
import { HeroService } from './../hero.service';


@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router) { }


  subtitle = "AKLs Hero List";
  heroes: Hero[]
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
