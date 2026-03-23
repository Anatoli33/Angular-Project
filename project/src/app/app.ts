import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Test],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('My Project');
}