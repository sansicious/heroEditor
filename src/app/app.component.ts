import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroList } from './heroList';
// import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';
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

  ngOnInit(): void {
    this.getHeroes();
  }
}



