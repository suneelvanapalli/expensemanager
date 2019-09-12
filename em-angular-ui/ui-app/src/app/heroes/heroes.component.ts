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
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
    this.heroes = HEROES;
    this.selectedHero = this.heroes[0];
  }

  onSelect(selectedHero: Hero ) {
    this.selectedHero = selectedHero;
  }


}


