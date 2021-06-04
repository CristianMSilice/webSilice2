import { Component, Input, OnInit } from '@angular/core';
import { sliderItem } from "../../../models/sliderItem";
import { SiblingsService } from '../../../services/siblings.service';

@Component({
  selector: 'web-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() sliderItem: Array<sliderItem> = [];
  _idVideo:number =0;
  math = Math;
  selectedOption: number = 0
  IntervalTime;
  sliderSize=200;

  constructor(private siblingsService: SiblingsService) {
    this.siblingsService.principalVideo$.subscribe(idYT=>{
      this._idVideo=idYT
    })
  }

  ngOnInit() {
    this.inicialiceTimer(this.IntervalTime);
    if(window.innerWidth<1600)this.sliderSize=130;
  }

  inicialiceTimer(timer) {
    if (timer) clearInterval(this.IntervalTime)
    this.IntervalTime = setInterval(() => {
      this.selectedOption = (this.selectedOption + 1) % this.sliderItem.length;
    }, 5000);
  }

  newOptionSelected(i) {
    this.selectedOption = i;
    this.inicialiceTimer(this.IntervalTime);
  }

  openModal() {
    console.log(this._idVideo);
    this.siblingsService.modifyModal(true,this._idVideo);
  }

}
