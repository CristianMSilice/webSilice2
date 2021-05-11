import { Component } from '@angular/core';
import { SiblingService } from 'src/app/chat/shared/services/sibling.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
  constructor(
    private SiblingService: SiblingService,
    private sanitizer: DomSanitizer
  ) {
  }
  data = [
    {
      imgLogo: "pau-logo.png",
      imgCover: "pau-cover.png",
      imgSolution: "1.jpg",
      name: "PAU",
      items: [
        { item: "Transforma tu atención al usuario con servicios automatizados y omnicanales." },
        { item: "Optimización de los procesos internos y la experiencia de usuario." },
        { item: "Integra  los sistemas de tu organización y llévalos a la mano de tu cliente." },
      ],
      link: { href: "https://www.pau.zone/" },
      linkText: "PAU",
      chatID: "solucion-pau"
    },
    {
      imgLogo: "smallshi-logo.png",
      imgCover: "smallshi-cover.png",
      imgSolution: "2.jpg",
      name: "SMALLSHI",
      items: [
        { item: "Gestión modular, eficiente, flexible y adaptable." },
        { item: "Desarrollo de nuevos mercados." },
        { item: "E-commerce, citas, reservas, marketing, promociones, delivery seguro y eficaz." },
      ],
      link: { href: "https://www.smallshi.com/" },
      linkText: "SMALLSHI",
      chatID: "solucion-smallshi"
    },
    {
      imgLogo: "m360-logo.png",
      imgCover: "m360-cover.png",
      imgSolution: "3.jpg",
      name: "MUNICIPIO 360",
      items: [
        { item: "Administraciones electrónicas eficientes y transparentes." },
        { item: "Enfoque socioeconómico y medioambiental." },
        { item: "Eliminación de la brecha digital." },
      ],
      link: { href: "http://municipios360.com" },
      linkText: "M360",
      chatID: "solucion-m360"
    },
    {
      imgLogo: "omniturno-logo.png",
      imgCover: "omniturno-cover.jpg",
      imgSolution: "4.jpg",
      name: "OMNITURNO",
      items: [
        { item: "Solicitud de turnos desde la comodidad del usuario a través de asistentes virtuales." },
        { item: "Trazabilidad 360, histórico de comunicaciones, consola de atención y analítica en tiempo real." },
        { item: "Estrategias de marketing y publicidad." },
      ],
      link: { href: "" },
      linkText: "OMNITURNO",
      chatID: "solucion-omniturno"
    },
    {
      imgLogo: "dsp-logo.jpg",
      imgCover: "dsp-cover.jpg",
      imgSolution: "5.jpg",
      name: "DSP",
      items: [
        { item: "Automatización inteligente de procesos de pago." },
        { item: "Plataforma de pagos unificada: E Commerce, QR, asistentes virtuales, aplicaciones móviles." },
      ],
      link: { href: "" },
      linkText: "DSP",
      chatID: "solucion-dsp"
    },
    
  ]
  selectedOption = 0;
  offset = { interval: null, value: 0 };
  velocity = { direction: -1, value: 1.5 }
  size = null;
  changing = false;


  ngAfterViewInit() {
    this.size = document.querySelector('#articulo_1').getBoundingClientRect().width;
    if (this.size) this.automovement();
  }

  step(num) {
    let step = this.selectedOption + parseInt(num);
    if (step < 0 || step > this.data.length - 1) return
    this.selectedOption = step;
  }

  reviewIfOverLoad(data) {
    // devuelve true si se sale del slider
    return data < 0 || data > this.data.length - 1
  }
  automovement() {
    this.offset.interval = setInterval(() => {
      const a = this.selectedOption - this.velocity.direction ;
      if (this.reviewIfOverLoad(a))this.velocity.direction *= -1;
        if (Math.abs(this.offset.value + this.velocity.value) > this.size) {
          this.offset.value = 0;
          this.step(this.velocity.direction);
        } else {
          this.offset.value += this.velocity.value * this.velocity.direction;
        }

    }, 150)
  }

  movement() {
    return this.sanitizer.bypassSecurityTrustStyle(`translate( calc(${-100 * this.selectedOption}% + ${this.offset.value}px),0px)`)
  }
}
