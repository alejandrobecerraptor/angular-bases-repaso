import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increaseBy()">+1</button>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="reset()">Reset</button>
  `,
  // styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy() {
    this.counter += 1;
  }

  decreaseBy() {
    this.counter -= 1;
  }

  reset() {
    this.counter = 10;
  }
}
