import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteService } from '../teste-service/teste.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teste03',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste03.component.html',
  styleUrls: ['./teste03.component.scss']
})
export class Teste03Component {
  receberMessage: string = '';
  receberMessage02: string = '';

  constructor(private testeService: TesteService){
    // this.testeService.message$.pipe(map(message => message.toUpperCase())).subscribe(message => {
    //   this.receberMessage = message;
    // })
    this.testeService.message02$.subscribe(message02 => {
      this.receberMessage02 = message02;
    })
  }
}
