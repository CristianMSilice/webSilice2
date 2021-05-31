import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataWpService } from '../../Services/datawp.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  constructor(
    private satanize: DomSanitizer,
  ) {}

  ngOnInit() {
    if (window.innerWidth < 1600) this.width = 330;
    this.prepareArray(this.itemsShowed);
  }

  data: Array<any> = [
    { id: 0, image: "sergio-final.jpg", name: "Sergio Alvano", position: "CEO", chatID: "nosotros-sergio", linkedin: "https://www.linkedin.com/in/sergio-alvano-8b806642/", email: "sergio.alvano@silice.si", text: `Emprendedor y especialista en el área de Sistemas de Información para la construcción de ecosistemas digitales. Su Objetivo: Cambiar realidades en el Sector Público, Banca y Pymes.`
    },
    { id: 1, image: "diana.jpg", name: "Diana Castellanos", position: "Responsable de Alianzas Estratégicas", chatID: "nosotros-diana", linkedin: `https://www.linkedin.com/in/dianacastellanosh/`, email: `diana.castellanos@silice.si`, text: `Su objetivo es adaptar nuestras soluciones a tus necesidades de manera efectiva` },
    { id: 2, image: "fernando.jpg", name: "Fernando Fernández", position: "Líder de Desarrollo", chatID: "nosotros-fernando", linkedin: `https://www.linkedin.com/in/fernando-fernandez-3169ba170/`, email: `fernando.fernandez@silice.si`, text: `Su objetivo es crear, optimizar y dirigir el equipo que convierte en realidad soluciones que cambian el mundo.` },
    { id: 3, image: "pedroCasasV1.jpg", name: "Pedro Casas", position: "Líder de Plataforma", chatID: "nosotros-pedro", linkedin: `https://www.linkedin.com/in/pedroip/`, email: `pedro.casas@silice.si`, text: `Análisis y desarrollo de aplicaciones e integración Bots.` },
    { id: 4, image: "juan.jpg", name: "Juan Antonio Blanco", position: "Country Manager España", chatID: "nosotros-juan", linkedin: `https://www.linkedin.com/in/juan-antonio-b-2872aa37/`, email: `juan.blanco@silice.si`, text: `Especialista en transformación digital de organizaciones en el sector público y privado. Su objetivo es implantar soluciones que llevan la administración pública al siguiente nivel.` },
    { id: 5, image: "alvaro.jpg", name: "Álvaro Andrés Ortíz", position: "Country Manager Colombia", chatID: "nosotros-alvaro", linkedin: `https://www.linkedin.com/in/alvaro-andres-ortiz-178b5b33/`, email: `alvaro.ortiz@silice.si`, text: `Generar planes tácticos y estratégicos con nuestras soluciones de acuerdo a tus necesidades.` },
    { id: 6, image: "jonatan-final.jpg", name: "Jonnathan Díaz", position: "Country Manager Panamá", chatID: "nosotros-jonathan", linkedin: `https://www.linkedin.com/in/jonnathan-d%C3%ADaz-6890551b7/`, email: `jonnathan.diaz@silice.si`, text: `El es especialista en transformación digital e innovación a nivel municipal. Su objetivo es llevar la administración municipal al siguiente nivel de la economía digital.` },
    { id: 7, image: "giovanna.jpeg", name: "Giovanna Villareal", position: "Comercial centro América y el Caribe", chatID: "nosotros-giovanna", linkedin: `https://www.linkedin.com/`, email: ``, text: `Construye la apertura de nuevos mercados, negocios y alianzas estratégicas que contribuyan al posicionamiento de las soluciones SILICE.` },
  ]
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
