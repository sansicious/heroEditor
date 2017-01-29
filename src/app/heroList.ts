import { Hero } from './hero';

export class HeroList{
  constructor(title, heroes){
    this.title = title;
    this.heroes = heroes;
  }
  title: string;
  heroes: Hero[];
}