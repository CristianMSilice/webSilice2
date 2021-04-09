import { Component } from '@angular/core';
import { SiblingService } from 'src/app/chat/shared/services/sibling.service';

@Component({
  selector: 'solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
  constructor(private SiblingService: SiblingService) {
  }

  data = [
    {
      imgLogo:"pau-logo.png",
      imgCover:"pau-cover.png",
      name:"Pau",
      items: [
        {item:"Transforma tu atención al usuario con servicios automatizados y omnicanales" },
        {item:"Optimización de los procesos internos y la experiencia de usuario." },
        {item:"Integra  los sistemas de tu organización y llévalos a la mano de tu cliente" },
      ],
      link: {href:"https://www.pau.zone/" },
      chatID: "solucion-pau"
    },
    {
      imgLogo:"smallshi-logo.png",
      imgCover:"smallshi-cover.png",
      name:"Smallshi",
      items: [
        {item:"Gestión modular, eficiente, flexible y adaptable." },
        {item:"Desarrollo de nuevos mercados." },
        {item:"E-commerce, citas, reservas, marketing, promociones, delivery seguro y eficaz." },
      ],
      link: {href:"https://www.smallshi.com/" },
      chatID: "solucion-smallshi"
    },
    {
      imgLogo:"m360-logo.png",
      imgCover:"m360-cover.png",
      name:"360",
      items: [
        {item:"Administraciones electrónicas eficientes y transparentes." },
        {item:"Enfoque socioeconómico y medioambiental" },
        {item:"Eliminación de la brecha digital." },
      ],
      link: {href:"http://municipios360.com"},
      chatID: "solucion-m360"
    },
    {
      imgLogo:"dsp-logo.jpg",
      imgCover:"dsp-cover.jpg",
      name:"DSP",
      items: [
        {item:"Automatización inteligente de procesos de pago." },
        {item:"Plataforma de pagos unificada: E Commerce, QR, asistentes virtuales, aplicaciones móviles." },
      ],
      link: {href:""},
      chatID: "solucion-dsp"
    },
    {
      imgLogo:"omniturno-logo.png",
      imgCover:"omniturno-cover.jpg",
      name:"Omniturno",
      items: [
        {item:"Solicitud de turnos desde la comodidad del usuario a través de asistentes virtuales." },
        {item:"Trazabilidad 360, histórico de comunicaciones, consola de atención y analítica en tiempo real." },
        {item:"Estrategias de marketing y publicidad." },
      ],
      link: {href:"" },
      chatID: "solucion-omniturno"
    },
  ]
  selectedOption = 0;
  
  step(num) {
    let step = this.selectedOption + parseInt(num) ;
    if(step < 0 || step > this.data.length - 1) return
    this.selectedOption = step;
  }

}
