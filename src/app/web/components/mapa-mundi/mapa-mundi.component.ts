import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ChildActivationEnd } from '@angular/router';
import { countryModel } from './country-model';

@Component({
  selector: 'mapa-mundi',
  templateUrl: './mapa-mundi.component.html',
  styleUrls: ['./mapa-mundi.component.scss']
})
export class MapaMundiComponent implements OnInit {

  constructor(private _sanitizer:DomSanitizer) { }
  countries;
  selectedCountry=undefined;
  sedes: Array <countryModel>= [
    {
      svgName: 'Bolivia', name: 'Bolivia', photo: 'bolivia-min.jpg', 
      date:' ',
      proyects:[
        {name:'',resume:'',date:''},
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Chile', name: 'Chile', photo: 'chile-min.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'Evertec ',resume:'',date:''},
        {name:'Sector Banca',resume:'Aliado estratégico SILICE.Nuestro énfasis en desarrollo es el envío masivo de SMS y notificaciones de Whatsapp.',date:''}        
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Colombia', name: 'Colombia', photo: 'colombia-min.jpg', 
      date:'',
      proyects:[
        {name:'Carolina',resume:'',date:''},
        {name:'Doctora Clara',resume:'',date:''},
        {name:'ETB',resume:'Aliados estratégicos en proyectos y desarrollos de Ciudad Omnicanal.',date:'Julio 2020'},
        {name:'Alfred Itto',resume:'Conserje Digital Especializado en Hotelería.',date:'Octubre 2020'},
        {name:'Secretaría de Salud de Bogotá',resume:'Desarrollamos tecnologías poniendo la IA al servicio ciudadano en la lucha contra el COVID19 como Doctora Clara.',date:''},
        {name:'POC SaluDAR',resume:'Gestión de los protocolos de bioseguridad, control de aforo con generación de turnos 	de entrada, catálogo digital, captación de datos  y marketing.', date:''},
        {name:'Alcaldía de Barranquilla',resume:'Barranquilla Ciudad Omnical',date:'Marzo 2021'}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Costa Rica', name: 'Costa Rica', photo: 'CostaRica-min.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'Evertec-PAU',resume:'En alianza estratégica trabajamos desde la tecnología de PAU Proactive para la gestión de envío masivo de notificaciones vía SMS Y Whatsap.',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Dominican Republic', name: 'Republica Dominicana', photo: 'dominicana-min.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'SDCC',resume:'Desarrollamos el asistente virtual Rosa para dinamizar los trámites y reservas de los usuarios del club. Además implementamos el carrito de compras y los pedidos digitales omnicanales para optimizar la experiencia de usuario.',date:'12 Febrero 2020'},
        {name:'CARDNET',resume:'Con nuestro aliado comercial Cardnet desarrollamos asistentes virtuales que apoyan los comercios en el país.',date:'12 Febrero 2020'},
        {name:'EDESUR',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'El Salvador', name: 'El Salvador', photo: 'elSalvador-min.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'Smallshi ',resume:'Punto de Venta y gestión de inventarios POS by Smallshi para Tigo',date:''},
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Mexico', name: 'México', photo: 'mexico-min.jpg', 
      date:'2019',
      proyects:[
        {name:'Becky',resume:'',date:''},
        {name:'SIMCA',resume:'',date:''},
        {name:'Asistente Virtual del Instituto de Becas y Créditos en Sonora',resume:'',date:''},
        {name:'IBYCESS',resume:'a través del asistente virtual Becky el Instituto de Becas y Créditos educativos en Sonora méxico, apoya y moderniza la gestión y trámites de los usuarios.',date:''},
        {name:'Simca',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Panama', name: 'Panamá', photo: 'panama-min.jpg', 
      date:'Sep, 2000',
      proyects:[
        {name:'PAU ',resume:'',date:''},
        {name:'Multibank ',resume:'',date:''},
        {name:'Vale Panamá ',resume:'',date:''},
        {name:'Ariel',resume:'',date:''},
        {name:'ISA',resume:'',date:''},
        {name:'AIG',resume:'',date:''},
        {name:'ROSA',resume:'Asistente virtual que realiza un triaje digital y permite conocer, centralizar y distribuir los casos COVID10 positivos a través de una derivación inteligente.',date:'Febrero de 2020'},
        {name:'SARA',resume:'Asistente Virtual del programa Panamá Solidario, un plan de emergencia y asistencia social de alivio para afectados por la pandemia mundial del COVID-19.',date:'Febrero de 2020'},
        {name:'NICO',resume:'Nico es el encargado de hacer llegar el mensaje a todos los ciudadanos que resulten negativos en las pruebas; así como de darle una serie de recomendaciones para enfrentar de mejor manera el tiempo que deben quedarse en casa en distanciamiento social.',date:'Febrero de 2020'},
        {name:'PANAMÁ SOLIDARIO',resume:'Programa de emergencia y asistencia social a través de alivios financieros que apoya las familias más vulnerables afectadas por la pandemia por COVID19.',date:'Febrero de 2020'},
        {name:'ACODECO',resume:'La asistente virtual Cindy, está diseñada para dar seguimiento y soporte a las denuncias y quejas ciudadanas sobre los derechos del consumidor en Panamá.',date:'29/09/2020'},
        {name:'Multibank',resume:'Mubot fue Asistente Virtual de Multibank en Panamá. Un desarrollo con  capacidad de brindar información a los usuarios en 4 categorías diferentes asociadas a la atención al usuario: soporte para personas y empresas, aplazamientos y horarios.',date:'22/08/2019'},
        {name:'Vale Panamá',resume:'Servicio Omnicanal para la Vale Panamá del Grupo Sodexo. En donde el Asistente Virtual Valentín para Facebook y Whatsapp y Valería como chatbot en la web, basados en tecnología PAU.',date:'Marzo 2020'},
        {name:'IFARHU-CECI',resume:'Centro de Consultas del IFARHU, asistente virtual donde podrás consultar el saldo de becas digitales y atención de consultas referentes a trámites.',date:'Marzo 2020'},
        {name:'DO IT CENTER',resume:'ISA, es su Asistente Virtual y trabaja desde el canal de Whatsapp Business y Facebook Messenger atendiendo: Preguntas frecuentes, ventas a través de Whatsapp, status de pedido en línea, garantías y puntos de fidelización.',date:'Mayo 2020'},
        {name:'Oficina Técnica Caja Ahorro - IDAAN',resume:'El Asistente Virtual de pagos le permite al ciudadano la consulta de su saldo adeudado tanto para el servicios de agua, como para el servicio de sseo. Así como también permite la realización del pago de ese saldo y la obtención de su respectivaa facturación.',date:'11/03/2020'},
        {name:'Banco Nacional Panamá - ARIEL',resume:'Ariel, trabaja a través de Inteligencia artificial con PAU. De manera automatizada genera conversaciones sobre productos y servicios para agilizar la atención y soporte a los clientes.',date:'06/07/2020'},
        {name:'Municipios Digitales Gobierno de Panamá',resume:'Este proyecto le apuesta a la modernización integral de la administración pública, por lo que adelanta un ambicioso programa de conectividad y de transformación de las plataformas digitales de las entidades de toda la República de Panamá.',date:'2019'},
        {name:'Metro de Panamá',resume:'recarga electrónica autoservicio sin contacto, ágil y segura.',date:'Octubre 2019'},
        {name:'PANAFOTO',resume:'Asistente Virtual encargado de responder preguntas frecuentes y que apoya a los clientes a revisar sus puntos de fidelización y el estatus de sus entregas y pronto permitirá la compra de productos vía Whatsapp.',date:'10/08/2020'},
        {name:'Lumicentro',resume:'Atención al cliente personalizada y omnicanal a través de asistente virtual personalizado.',date:'10/08/2020'},
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Peru', name: 'Perú', photo: 'peru-min.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'',resume:'',date:''},
        {name:'',resume:'',date:''},
        {name:'',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Spain', name: 'España', photo: 'españa-min.jpg', 
      date:' 2001',
      proyects:[
        {name:'Asistente Virtual Carolina',resume:'Plataforma ganadora de los premios CNIS a la mejor solución de Participación Ciudadana',date:''},
        {name:'Solución señalética ',resume:'Solución de señalética diseñada junto a Telefónica e Iurban para el Hospital Perpetuo Socorro de Las Palmas de Gran Canaria ',date:''},
        {name:'Gestión de Turnos y Cita Previa',resume:'Gestión de Turnos y Cita Previa junto a Telefónica e Iurban para el Servicio Extremeño Público de empleo',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },   
  ]
  changeCanvas=false;
  ngOnInit() {
    this.addCountries()
    setTimeout(()=>{
      if(this.selectedCountry == undefined)this.selectedCountry = this.sedes[Math.floor(Math.random()*(this.sedes.length))].svgName;
      console.log(this.selectedCountry)
    },5000);
  }

  pais(pais?: string) {
    // this.drawLine({... this.sedes.filter(e=>e.name==pais)[0]['choords']})
    if(pais){
      this.selectedCountry=pais;
    }
    else{
      this.selectedCountry="ninguno"
    }
  }

  addCountries() {
    let prueba = setInterval(() => {
      this.countries = Array.from(document.querySelectorAll('.mapsvg-region.pais'));
      if (!this.countries) return
      clearInterval(prueba)
      this.countries.forEach((country) => {
        this.newSizeDotsContry(country)
      })
    }, 200);
  }

  newSizeDotsContry(child) {
    let web = document.querySelector('web');
    let name = child.getAttribute('title').toLowerCase()
    let size = child.getBoundingClientRect();
    let websize = web.getBoundingClientRect();
    
    let _size = {
      top: size.top + (size.height / 2) - 5.5 - websize.top,
      left: size.left + (size.width / 2) - 5.5 - websize.left
    }
    let countryName: string = child.getAttribute('title').toLowerCase();
    switch (countryName) {
      case 'spain':
        _size.top = _size.top - 8;
        _size.left = _size.left + 6;
        break;
        case 'chile':
          _size.left = _size.left + 31;
          break;
      default:
        break;
    }
    let detailDataMapaMundi =document.querySelector('#DetailDataMapaMundi').getBoundingClientRect();
    this.sedes.filter(e=>e.svgName.toLowerCase()==name)[0]['choords'].top = _size.top - detailDataMapaMundi.top ;
    this.sedes.filter(e=>e.svgName.toLowerCase()==name)[0]['choords'].left = _size.left - detailDataMapaMundi.left ;
  
    _size = {
      top: _size.top  - websize.top,
      left: _size.left - websize.left
    }

    return _size;
  }



  myTransform(x,y,s): SafeStyle {
    return this._sanitizer.bypassSecurityTrustStyle(`scale(${s}) translate(${x}px,${y}px) `);
  }


}
