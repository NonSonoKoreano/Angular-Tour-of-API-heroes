import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroes: any = [
  ];
  newHero;
  newRandomHero;
  constructor() {}

  getHeroes() {
    return this.heroes;
  }
  addHero(hero) {
    this.heroes.push(hero);
  

 }
  deleteHero(hero) {
     this.heroes.pop(hero);
    console.log(hero)
  }
}
