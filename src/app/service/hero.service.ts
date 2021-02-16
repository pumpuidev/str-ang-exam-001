import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private hero: Hero[] = [
    {
        "name": "hero1",
        "id": "1",
        "superPower": "power1",
        "address": "add1"
    },
    {
        "name": "hero2",
        "id": "2",
        "superPower": "power2",
        "address": "add2"
    },
    {
        "name": "hero3",
        "id": "3",
        "superPower": "power3",
        "address": "add3"
    },
    {
        "name": "hero4",
        "id": "4",
        "superPower": "power4",
        "address": "add4"
    },
    {
        "name": "hero5",
        "id": "5",
        "superPower": "power5",
        "address": "add5"
    },

  ];

  hero$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.hero);

  constructor(

  ) { }

  getAll(): void{
    this.hero$.next(this.hero);
  }

}
