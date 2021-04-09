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
      Image: this.Img_url + 'slide-municipio360.jpg', mainTitle: 'Municipio 360', mainText: 'Plataforma de Atención Gubernamental', 
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'MUNICIPIO 360', text: 'Gobierno inclusivo, transparente, accesible y participativo',
    },

    {
      Image: this.Img_url + 'slide-dsp.jpg', mainTitle: 'DSP', mainText: 'Plataforma de gestión de pago',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'DSP', text: 'Integración y orquestador de procesadores de pago y servicios',
    },


    {
      Image: this.Img_url + 'slide-omniturno.jpg', mainTitle: 'OMNITURNO', mainText: 'Gestión Omnicanal de Atención de Filas, Turnos y Citas',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'OMNITURNO', text: 'Plataforma inteligente de servicios y trámites',
    },

    {
      Image: this.Img_url + 'slide-pau.jpg', mainTitle: 'PAU', mainText: 'Plataforma Omnicanal de Atención al Usuario',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'PAU', text: 'Servicios automatizados y ominicales',
    },

    {
      Image: this.Img_url + 'slide-smallshi.jpg', mainTitle: 'SMALLSHI', mainText: 'Plataforma de Gestión Empresarial',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'SMALLSHI', text: 'Ecosistema para la transformación digital',
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
