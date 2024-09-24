
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}}</p>
<button (click)="increaseBy(1)">Incremento</button>

<button (click)="decreaseBy(1)">Decremento</button>

<button (click)="resetCounter()">Reiniciar</button>

  `
})

export class CounterComponent  {
  public counter:number=10;

  increaseBy(value:number):void{
    this.counter+=value
  }
  decreaseBy(value:number):void{
    this.counter-=value
  }
  resetCounter():void{
    this.counter=10
  }
}
