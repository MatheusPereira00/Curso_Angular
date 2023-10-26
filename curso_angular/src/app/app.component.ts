import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Teste01Component } from './teste01/teste01.component';
import { Teste02Component } from './teste02/teste02.component';
import { Teste03Component } from './teste03/teste03.component';
import { Teste04Component } from './teste04/teste04.component';
import { Teste05Component } from './teste05/teste05.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  providers: [],
  imports: [
    RouterOutlet,
    Teste01Component,
    Teste02Component,
    Teste03Component,
    Teste04Component,
    Teste05Component
  ],
})
export class AppComponent {
  title = 'curso_angular';
}
