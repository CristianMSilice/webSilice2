import { Component, Output,EventEmitter , OnInit } from '@angular/core';
@Component({
  selector: 'chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.css']
})
export class ChatOptionsComponent implements OnInit {
  filetoSend :HTMLInputElement;
  file:any
  @Output() enviarArchivo = new EventEmitter<string>();
  constructor(  ) {   }
  ngOnInit() {
    this.filetoSend = document.querySelector('#chat-input-file');
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
  }

}
