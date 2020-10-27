import { Component, Output,EventEmitter , OnInit } from '@angular/core';
import {reviewFile} from './reviewfile';
@Component({
  selector: 'chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.css']
})
export class ChatOptionsComponent implements OnInit {
  file:reviewFile ;
  filetoSend :HTMLInputElement;
  @Output() enviarArchivo = new EventEmitter<string>();
  constructor(  ) {   }
  ngOnInit() {
    this.filetoSend = document.querySelector('#chat-input-file');
    this.file = new reviewFile(this.filetoSend);
  }
  options=[
    {
      class:'question-menu',
      action:'question-menu',
    },
    {
      class:'adjunto',
      action:'adjunto',
    },
  ]
  toggleoptions(){
    document.querySelector('#menu-options').classList.toggle('hidden');
  }
  loadfile(){
    this.filetoSend.click();
  }
  openoption(action){
    let options = document.querySelectorAll('.selectableOptionInput');
    options.forEach(option=>{
      if (option.classList.contains(action)) {
        option.classList.toggle('hidden');
      }else{
        option.classList.add('hidden');
      }
    })
  }
  sendFile(){
    this.enviarArchivo.emit(this.file.file.kindfile);
    this.file.resetfile();
  }

}
