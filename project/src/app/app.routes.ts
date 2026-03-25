import { Routes } from '@angular/router';
import { Home } from './home/home.js';
import { Countdown } from './countdown/countdown.js';
import { Counter } from './counter/counter.js';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'counter', component: Counter},
    {path: 'countdown', component: Countdown}
];
