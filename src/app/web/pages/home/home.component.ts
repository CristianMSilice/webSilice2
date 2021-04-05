import { Component, OnInit } from '@angular/core';
import { sliderItem } from '../../models/sliderItem';
// import { SiblingsService } from '../../Services/siblings.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private siblingsService:SiblingsService
    ) { }
  
  
  Img_url: String = 'assets/images/slider/'
  showModal=false;
  _sliderItems: Array<sliderItem> = [
    {
      Image: this.Img_url + 'slide-municipio360.jpg', text: 'Plataforma de Atención Gubernamental', title: 'Municipio 360',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

    {
      Image: this.Img_url + 'slide-dsp.jpg', title: 'DSP', text: 'Plataforma de gestión de pago',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },


    {
      Image: this.Img_url + 'slide-omniturno.jpg', title: 'OMNITURNO', text: 'Gestión Omnicanal de Atención de Filas, Turnos y Citas',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

    {
      Image: this.Img_url + 'slide-pau.jpg', title: 'PAU', text: 'Plataforma Omnicanal de Atención al Usuario',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

    {
      Image: this.Img_url + 'slide-smallshi.jpg', title: 'SMALLSHI', text: 'Plataforma de Gestión Empresarial',
      button: { text: 'Conocer', callfuncion: 'prueba' }
    },

  ]
  ngOnInit() {
    // this.subscribeShowModal();
  }

  // subscribeShowModal(){
  //   this.siblingsService.showModal$.subscribe((value)=>{
  //     this.showModal= value;
  //   })
  // }
  

  


}
