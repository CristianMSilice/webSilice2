import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import {sliderItem  } from "../../../models/sliderItem";

@Component({
  selector: 'web-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
@Input() width:string ;
@Input() height:string ;
@Input() sliderItem:Array<sliderItem>=[];
@Output() openModalEmmiter = new EventEmitter<boolean>();
  math=Math;
  selectedOption: number = 0
  IntervalTime ;


  constructor() {
   }

  ngOnInit() {
    this.inicialiceTimer(this.IntervalTime);
  }

  inicialiceTimer(timer){
    if(timer) clearInterval(this.IntervalTime)
    this.IntervalTime = setInterval(() => {
      this.selectedOption=(this.selectedOption + 1) % this.sliderItem.length;
    },50000);
  }

  newOptionSelected(i){
    this.selectedOption=i;
    this.inicialiceTimer(this.IntervalTime);
  }

  openModal() {
    this.openModalEmmiter.emit(true);
  }

}
