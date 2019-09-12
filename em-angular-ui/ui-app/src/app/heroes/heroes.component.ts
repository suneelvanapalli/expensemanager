import { Component, OnInit } from '@angular/core';
import Hero from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;
  constructor() {
  }

  ngOnInit() {
    this.hero = new Hero();
    this.hero.id = 12;
    this.hero.name = 'Suneel';
    this.heroes = HEROES;
  }


}


