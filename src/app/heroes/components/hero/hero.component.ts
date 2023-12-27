import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroAge(): number {
    return this.age;
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  public changeName(): void {
    this.name = 'spiderman';
  }

  public changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
