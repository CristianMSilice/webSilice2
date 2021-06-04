import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-chat-preguntas',
  templateUrl: './chat-preguntas.component.html',
  styleUrls: ['./chat-preguntas.component.scss'],
 
})
export class ChatPreguntasComponent   {
  @Input()
  regresarComando:Function;
  @Input()
  deleteHandler: Function;


  constructor( 
  ) { } 
    
selectComando(comando) 
{
  this.regresarComando(comando);
}

  goBack() {
    this.deleteHandler();
  }
 
}
