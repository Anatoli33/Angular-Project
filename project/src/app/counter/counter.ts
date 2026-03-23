import { Component } from '@angular/core'
import { CounterService } from '../services/counter.service.js'

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './Counter.html',
  styleUrl: './counter.css',
})
export class Counter {
   constructor(public counterService: CounterService){
    
  }
}
