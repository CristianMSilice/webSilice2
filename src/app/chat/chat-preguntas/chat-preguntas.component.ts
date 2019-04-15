import { Component, OnInit,ViewChild ,EventEmitter} from '@angular/core';

import {  Output,  Input } from '@angular/core'; 
@Component({
  selector: 'app-chat-preguntas',
  templateUrl: './chat-preguntas.component.html',
  styleUrls: ['./chat-preguntas.component.css']
})
export class ChatPreguntasComponent implements OnInit {
  @Input()
  regresarComando:Function;
  constructor( 
  ) { } 
  ngOnInit(){
     
 
}
selectComando(comando) 
{
  
  this.regresarComando(comando);
}
goBack() {
   
}
 
 
}
