import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataWpService } from '../../services/datawp.service';

@Component({
  selector: 'equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class NosotrosEquipoComponent implements OnInit {
  public data: any 

  constructor(
    private dataWpService: DataWpService,
    private satanize: DomSanitizer
  ) { }

  ngOnInit() {
    this.dataWpService.getSomos('equipo').subscribe(res => this.data = res)

    if (window.innerWidth < 1600) this.width = 330;
    this.prepareArray(this.itemsShowed);
  }

  showedOption: number = 0;  //sirve para saber que opción se está mostrando en el carousel

  // para mostrar información adicional al dar click 
  selectedOption = { show: false, image: null, name: null, position: null, chatID: null, linkedin: null, email: null, text: null };

  dataRealLength: number;
  itemsShowed = 4;
  translateFlag = true;
  width = 390
  offset = { interval: null, value: 0 };

  prepareArray(items) {
    let a = JSON.parse(JSON.stringify(this.data))
    this.dataRealLength = a.length;
    for (let i = 0; i < items; i++) {
      a.push(this.data[i])
      a.unshift(this.data[this.data.length - i - 1])
    }
    this.data = a;
    this.showedOption = - this.itemsShowed;
    this.automovement(-2);
  }

  step(num: number, animation: boolean) {
    let step = this.showedOption + num;
    if (step > 0 || step + 1 <= - this.dataRealLength) {
      (animation)
        ? step = this.fakeRound(step) + 0
        : step = this.fakeRound(step) + num;      
      setTimeout(() => {
        this.translateFlag = true;
        (animation) ? this.showedOption = this.showedOption + num : '';
      }, 10)
    }
    this.newMovement(num);
    
    this.showedOption = step;
  }

  fakeRound(step) {
    this.translateFlag = false;
    if (step + 1 <= - this.dataRealLength) step = 0;
    else if (step > 0) step = - this.dataRealLength;
    return step;
  }

  showResume(ID) {
    let SelectedOptionBefore = this.selectedOption;
    this.selectedOption = this.data.filter(person => person.chatID == ID)[0];
    if (SelectedOptionBefore == this.selectedOption) {
      this.selectedOption = { show: false, image: null, name: null, position: null, chatID: null, linkedin: null, email: null, text: null };
    }
    else { this.selectedOption.show = true }
  }

  movementCarousel() {
    let value = (this.width * this.showedOption) + this.offset.value;
    return this.satanize.bypassSecurityTrustStyle(`translate(${value}px ,0px)`);
  }

  automovement(value) {
    this.offset.value = 0;
    this.offset.interval = setInterval(() => {
      if (Math.abs(this.offset.value + value) >= this.width) { this.step(-1, false) };
      this.offset.value = (this.offset.value + value) % this.width;
    }, 100);
  }

  newMovement(num){
    this.offset.value = 0;
    clearInterval(this.offset.interval)
    if(num>=0)this.automovement(2);
    if(num<0)this.automovement(-2);
  }

}
