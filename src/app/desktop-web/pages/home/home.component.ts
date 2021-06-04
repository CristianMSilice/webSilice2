import { Component } from '@angular/core';
import { sliderItem } from 'src/app/web/models/sliderItem';
import { SiblingsService } from '../../services/sibling.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  _idYoutube: number=0; 
  Img_url: String = 'assets/images/slider/'
  showModal=false;
  _sliderItems: Array<sliderItem> = [
    {
      Image: this.Img_url + 'slide-municipio360.webp', mainTitle: 'Municipio 360', mainText: 'Plataforma de Atención Gubernamental', 
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'MUNICIPIO 360', text: 'Gobierno inclusivo, transparente, accesible y participativo',
      link: '/soluciones'
    },

    {
      Image: this.Img_url + 'slide-dsp.webp', mainTitle: 'DSP', mainText: 'Plataforma de Gestión de Pago',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'DSP', text: 'Integración y orquestador de procesadores de pago y servicios',
      link: '/soluciones'
    },


    {
      Image: this.Img_url + 'slide-omniturno.webp', mainTitle: 'OMNITURNO', mainText: 'Gestión Omnicanal de Atención de Filas, Turnos y Citas',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'OMNITURNO', text: 'Plataforma inteligente de servicios y trámites',
      link: '/soluciones'
    },

    {
      Image: this.Img_url + 'slide-pau.webp', mainTitle: 'PAU', mainText: 'Plataforma Omnicanal de Atención al Usuario',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'PAU', text: 'Servicios automatizados y ominicales',
      link: '/soluciones'
    },

    {
      Image: this.Img_url + 'slide-smallshi.webp', mainTitle: 'SMALLSHI', mainText: 'Plataforma de Gestión Empresarial',
      button: { text: 'Conocer', callfuncion: 'prueba' },
      title: 'SMALLSHI', text: 'Ecosistema para la transformación digital',
      link: '/soluciones'
    },

  ]
  constructor(private SiblingsService:SiblingsService){}
  



  


}
