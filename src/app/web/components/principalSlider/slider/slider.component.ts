import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { SiblingsService } from 'src/app/web/Services/siblings.service';
import { sliderItem } from "../../../models/sliderItem";

@Component({
  selector: 'web-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() sliderItem: Array<sliderItem> = [];

  math = Math;
  selectedOption: number = 0
  IntervalTime;
  sliderSize=200;

  constructor(private siblingsService: SiblingsService) {
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
    this.siblingsService.modifyModal(true);
  }

}
