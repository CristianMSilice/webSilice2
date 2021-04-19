import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../../../../../src/app/chat/shared/services/sibling.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  sliderItem: Array<any> = [
    {
      image: "sergio.jpg", name: "Sergio Alvano", position: "CEO", chatID: "nosotros-sergio", linkedin: "https://www.linkedin.com/in/sergio-alvano-8b806642/", email: "sergio.alvano@silice.si", text: `Emprendedor y especialista en el área de Sistemas de Información para la construcción de ecosistemas digitales. Su Objetivo: Cambiar realidades en el Sector Público, Banca y Pymes.`},
    { image: "diana.jpg", name: "Diana Castellanos", position: "Responsable de Alianzas Estratégicas", chatID: "nosotros-diana", linkedin: `https://www.linkedin.com/in/dianacastellanosh/`, email: `diana.castellanos@silice.si`, text: `Su objetivo es adaptar nuestras soluciones a tus necesidades de manera efectiva` },
    { image: "fernando.jpg", name: "Fernando Fernández", position: "Líder de Desarrollo", chatID: "nosotros-fernando", linkedin: `https://www.linkedin.com/in/fernando-fernandez-3169ba170/`, email: `fernando.fernandez@silice.si`, text: `Su objetivo es crear, optimizar y dirigir el equipo que convierte en realidad soluciones que cambian el mundo.` },
    { image: "juan.jpg", name: "Juan Antonio Blanco", position: "Country Manager España", chatID: "nosotros-juan", linkedin: `https://www.linkedin.com/in/juan-antonio-b-2872aa37/`, email: `juan.blanco@silice.si`, text: `Especialista en transformación digital de organizaciones en el sector público y privado. Su objetivo es implantar soluciones que llevan la administración pública al siguiente nivel.` },
    { image: "alvaro.jpg", name: "Álvaro Andrés Ortíz", position: "Country Manager Colombia", chatID: "nosotros-alvaro", linkedin: `https://www.linkedin.com/in/alvaro-andres-ortiz-178b5b33/`, email: `alvaro.ortiz@silice.si`, text: `Generar planes tácticos y estratégicos con nuestras soluciones de acuerdo a tus necesidades.` },
    { image: "jonatan.jpg", name: "Jonnathan Díaz", position: "Country Manager Panamá", chatID: "nosotros-jonathan", linkedin: `https://www.linkedin.com/in/jonnathan-d%C3%ADaz-6890551b7/`, email: `jonnathan.diaz@silice.si`, text: `El es especialista en transformación digital e innovación a nivel municipal. Su objetivo es llevar la administración municipal al siguiente nivel de la economía digital.` },
  ]
  showedOption: number = 0;  //sirve para saber que opción se está mostrando en el carousel

  // para mostrar información adicional al dar click 
  selectedOption = { show: false, image: null, name: null, position: null, chatID: null, linkedin: null, email: null, text: null };

  sliderItemRealLength: number;
  itemsShowed = 4;
  translateFlag = true;
  width = 390
  offset = { interval: null, value: 0 };
  constructor(
    private SiblingService: SiblingService
    , private satanize: DomSanitizer) {
  }



  ngOnInit() {
    if (window.innerWidth < 1600) this.width = 330;
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
    this.showedOption = - this.itemsShowed;
    this.automovement(-2);
  }
  

  step(num, animation:boolean) {
    let step = this.showedOption + parseInt(num);
    if (step > 0 || step <= - this.sliderItemRealLength - 1) {
      step = this.fakeRound(step) + (animation)?0:parseInt(num);
       setTimeout(() => {
        this.translateFlag=true;
        (animation)?this.showedOption += parseInt(num):'';
       },10)
    }
    this.showedOption = step;
  }
  fakeRound(step) {
    this.translateFlag = false;
    if (step > 0) step = - this.sliderItemRealLength;
    else if (step <= - this.sliderItemRealLength -1 ) step = 0;
    return step;
  }

  showResume(ID) {
    let SelectedOptionBefore = this.selectedOption;
    this.selectedOption = this.sliderItem.filter(person => person.chatID == ID)[0];
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
      if (Math.abs(this.offset.value + value) >= this.width) {this.step(-1,false)};
      this.offset.value = (this.offset.value + value) % this.width;
    }, 100);
  }
  
}
