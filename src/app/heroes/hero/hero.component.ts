import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'spiderman';
  public age: number = 16;
  public gender: string = 'Male';
  public capital: string = 'Spider Sense';


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old and ${this.gender}`;
  }

  changeName(): void {
    this.name = 'Iron Man';
  }

  changeAge(): void {
    this.age = 18;
  }

  reset(): void {
    this.name = 'spiderman';
    this.age = 16;
  }

}
