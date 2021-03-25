import { Component, Input, OnInit } from '@angular/core';
import {sliderItem  } from "../../../models/sliderItem";

@Component({
  selector: 'web-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
@Input() width:string ='100%';
@Input() height:string ='125%';
@Input() sliderItem:Array<sliderItem>=[];
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

}
