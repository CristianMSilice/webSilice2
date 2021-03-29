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
      Image: this.Img_url + 'slide-municipio360.jpg', text: 'Atención gubernamental', title: 'Municipio 360',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

    {
      Image: this.Img_url + 'slide-dsp.jpg', text: 'DSP', title: 'Plataforma de gestión de pago',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },


    {
      Image: this.Img_url + 'slide-omniturno.jpg', text: 'DSP', title: 'Plataforma de gestión de pago',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

    {
      Image: this.Img_url + 'slide-pau.jpg', text: 'DSP', title: 'Plataforma de gestión de pago',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

    {
      Image: this.Img_url + 'slide-smallshi.jpg', text: 'DSP', title: 'Plataforma de gestión de pago',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

  ]
  ngOnInit() {
  }

  openModal($event){
    this.showModal = true;
  }

}
