import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteService } from '../teste-service/teste.service';

@Component({
  selector: 'app-teste01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste01.component.html',
  styleUrls: ['./teste01.component.scss']
})
export class Teste01Component {
  constructor(private testeService: TesteService){}

  enviarMessage(): void {
    this.testeService.enviarMessage('hello word');
  }
  
  enviarMessage02(): void {
    this.testeService.enviarMessage02('hello word 02');
  }
}
