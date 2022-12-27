import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from './hero.model';

@Component({
  selector: 'app-Heroes',
  templateUrl: './Heroes.component.html',
  styleUrls: ['./Heroes.component.css']
})
export class HeroesComponent implements OnInit {
  loading$?: Observable<boolean>;
  heroes$?: Observable<Hero[]>;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  add(hero: Hero) {
    this.heroService.add(hero);
  }

  delete(hero: Hero) {
    this.heroService.delete(hero.Id);
  }
  getHeroes() {
    this.heroService.getAll();
  }
  update(hero: Hero) {
    this.heroService.update(hero);
  }
}
