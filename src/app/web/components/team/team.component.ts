import { Component, OnInit } from '@angular/core';
import { SiblingService } from 'src/app/chat/shared/services/sibling.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  sliderItem: Array<any> = [
    { image: "sergio.jpg", name: "Sergio Alvano", position: "CEO", chatID: "nosotros-sergio" },
    { image: "diana.jpg", name: "Diana Castellanos", position: "Responsable de alianzas estratégica", chatID: "nosotros-diana" },
    { image: "fernando.jpg", name: "Fernando Fernández", position: "Lider de Desarrollo", chatID: "nosotros-fernando" },
    { image: "juan.jpg", name: "Juan Antonio Blanco", position: "Country Manager España", chatID: "nosotros-juan" },
    { image: "alvaro.jpg", name: "Álvaro Andrés Ortíz", position: "Country Manager Colombia", chatID: "nosotros-alvaro" },
    { image: "jonatan.jpg", name: "Jonathan Díaz", position: "Country Manager Panamá", chatID: "nosotros-jonathan" },
  ]
  selectedOption = 0;
  sliderItemRealLength: number;
  itemsShowed = 4;
  translateFlag = true;
  width=390

  constructor(private SiblingService: SiblingService) {
  }


  
  ngOnInit() {
    if(window.innerWidth < 1600)this.width=330;
    this.prepareArray(this.itemsShowed);
  }

  prepareArray(items) {
    let a = JSON.parse(JSON.stringify(this.sliderItem))
    this.sliderItemRealLength = a.length;
    for (let i = 0; i < items; i++) {
      a.push(this.sliderItem[i])
      a.unshift(this.sliderItem[this.sliderItem.length - i - 1])
    } 
    this.sliderItem = a;
    this.selectedOption = - this.itemsShowed;
  }

  step(num) {
    let step = this.selectedOption + parseInt(num);
    if (step > 0 || step <= - this.sliderItemRealLength -1) {
      step = this.fakeRound(step);
      setTimeout(() => {
        this.translateFlag=true;
        step = this.selectedOption + parseInt(num);
        this.selectedOption = step;
      },10);
    }
    this.selectedOption = step;
  }
  fakeRound(step) {
    this.translateFlag = false;
    if (step > 0) step = - this.sliderItemRealLength;
    else if (step <= - this.sliderItemRealLength -1 ) step = 0;
    return step;
  }

}
