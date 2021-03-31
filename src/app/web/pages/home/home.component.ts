import { Component, OnInit } from '@angular/core';
import { sliderItem } from '../../models/sliderItem';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  showModal=false;
  Img_url: String = 'assets/images/slider/'
  _sliderItems: Array<sliderItem> = [
    {
      Image: this.Img_url + 'slide-municipio360.jpg', text: 'Plataforma de Gestión Empresarial', title: 'Smallshi',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      class: 'x-center y-top'
    },

    {
      Image: this.Img_url + 'slide-dsp.jpg', text: 'DSP', title: 'PAU',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      class: 'x-left y-center'
    },


    {
      Image: this.Img_url + 'slide-omniturno.jpg', text: 'Plataforma de Atención Gubernamental', title: 'Municipio 360',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      class: 'x-left y-center'
    },

    {
      Image: this.Img_url + 'slide-pau.jpg', text: 'Plataforma de gestión de pagos', title: 'DSP',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      class: 'x-right y-center'
    },

    {
      Image: this.Img_url + 'slide-smallshi.jpg', text: 'Gestión Omnicanal de Atención de Filas, Turnos y Citas', title: 'Omniturno',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      class: 'x-right y-center'
    },

  ]
  ngOnInit() {
  }

  openModal($event){
    this.showModal = true;
  }

}
