import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {



  herolist: BehaviorSubject<Hero[]> = this.heroService.hero$;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
  }



}
