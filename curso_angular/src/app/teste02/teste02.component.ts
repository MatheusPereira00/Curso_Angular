import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteService } from '../teste-service/teste.service';

@Component({
  selector: 'app-teste02',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste02.component.html',
  styleUrls: ['./teste02.component.scss']
})
export class Teste02Component {

  receberMessage: any = '';

  constructor(private testeService: TesteService){
    this.testeService.message$.subscribe(message => {
      this.receberMessage = message;
    })
  }


  enviarMessage(): void {
    // this.testeService.enviarMessage('hello word');
    console.log('teste')
  }
}
