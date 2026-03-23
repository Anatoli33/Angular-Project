import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Counter],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('Angular Project');
}