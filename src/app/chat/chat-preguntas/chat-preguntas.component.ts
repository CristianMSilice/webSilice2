import { Component, OnInit,ViewChild ,EventEmitter} from '@angular/core';
 
import {  Output,  Input } from '@angular/core'; 
@Component({
  selector: 'app-chat-preguntas',
  templateUrl: './chat-preguntas.component.html',
  styleUrls: ['./chat-preguntas.component.css'],
 
})
export class ChatPreguntasComponent implements OnInit {
  @Input()
  regresarComando:Function;
  @Input()
  deleteHandler: Function;


  constructor( 
  ) { } 
  ngOnInit(){
     
 
}
selectComando(comando) 
{
  console.log("entra")
  this.regresarComando(comando);
}

  goBack() {
    this.deleteHandler();
  }
 
}
