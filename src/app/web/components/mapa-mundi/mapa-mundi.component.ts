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
      svgName: 'Bolivia', name: 'Bolivia', photo: 'bolivia.jpg', 
      date:' ',
      proyects:[
        {name:'',resume:'',date:''},
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Chile', name: 'Chile', photo: 'chile.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'Evertec ',resume:'',date:''},
        
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Colombia', name: 'Colombia', photo: 'colombia.jpg', 
      date:'',
      proyects:[
        {name:'CCB',resume:'',date:''},
        {name:'ETB',resume:'',date:''},
        {name:'Alfred Itto',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Costa Rica', name: 'Costa Rica', photo: 'CostaRica.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'PAU-Evertec',resume:'',date:''},
        {name:'',resume:'',date:''},
        {name:'',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Dominican Republic', name: 'Republica Dominicana', photo: 'dominicana.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'SDCC',resume:'Santo Domingo Country Club',date:''},
        {name:'CARDNET',resume:'',date:''},
        {name:'EDESUR',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'El Salvador', name: 'El Salvador', photo: 'elSalvador.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'Smallshi ',resume:'Punto de Venta y gestión de inventarios POS by Smallshi para Tigo',date:''},
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Mexico', name: 'México', photo: 'mexico.jpg', 
      date:'2019',
      proyects:[
        {name:'Becky',resume:'',date:''},
        {name:'SIMCA',resume:'',date:''},
        {name:'',resume:'Asistente Virtual del Instituto de Becas y Créditos en Sonora',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Panama', name: 'Panamá', photo: 'panama.jpg', 
      date:'Sep, 2000',
      proyects:[
        {name:'PAU ',resume:'',date:''},
        {name:'Multibank ',resume:'',date:''},
        {name:'Vale Panamá ',resume:'',date:''},
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Peru', name: 'Perú', photo: 'peru.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'',resume:'',date:''},
        {name:'',resume:'',date:''},
        {name:'',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'Spain', name: 'España', photo: 'españa.jpg', 
      date:' 2001',
      proyects:[
        {name:'Asiste Virtual Carolina',resume:'Plataforma ganadora de los premios CNIS a la mejor solución de Participación Ciudadana',date:''},
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
