import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() showModal:boolean= false;
  reviewClose($event){
    if (! $event.target.classList.contains('containerModalAndKey')) return;
    this.close();
  }
  close(){
    this.showModal=false;
  }

}
