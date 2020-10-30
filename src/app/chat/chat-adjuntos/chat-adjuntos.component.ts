import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { reviewFile } from "./utils/reviewfile";
@Component({
  selector: 'chat-adjuntos',
  templateUrl: './chat-adjuntos.component.html',
  styleUrls: ['./chat-adjuntos.component.css']
})
export class ChatAdjuntosComponent implements OnInit {

  @Input() show:boolean; // Sí se muestra o no los adjuntos
  @Output() public showoutput = new EventEmitter()
  @Output() public send = new EventEmitter()
  file :reviewFile;
  constructor() { }
  ngOnInit() {
  }
  getinput(element : HTMLElement) :HTMLInputElement{
    return element.querySelector('input');
  }
  cargarAdjunto(element : HTMLElement){
    let input  = this.getinput(element);
    if(!this.file){
      this.file = new reviewFile(input, ['image','video']);
    }
    input.click();
  }
  cancelLoadFile(element : HTMLElement){
    // let input  = this.getinput(element);
    this.file.resetfile();
    // input.value='';
  }
  sendFile(element : any, kind : String){
      let src = element.lastChild.getAttribute('src')
    let tostring = {
      source: src,
      kind: this.file.file.kindfile,
      type: this.file.getMime(),
    }
    this.send.emit(JSON.stringify(tostring));
    this.file.file.enabled=false;
    this.showoutput.emit(false);    
  }
}
