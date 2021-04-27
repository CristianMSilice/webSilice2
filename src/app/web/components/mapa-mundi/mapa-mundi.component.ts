import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'mapa-mundi',
  templateUrl: './mapa-mundi.component.html',
  styleUrls: ['./mapa-mundi.component.scss']
})
export class MapaMundiComponent implements OnInit {

  constructor(private _sanitizer:DomSanitizer) { }
  countries;
  selectedCountry=undefined;
  sedes = [
    {
      name: 'panama', text: 'Panamá', image: 'flag-panama.png', link: 'nosotros/sedes',
      team: { userimage: 'equipo-jonatan.jpg', userName: 'Jonatan' },
      contry: [
        { item: '+10 años', text: 'proyectos de transformación Digital' },
        { item: '+10', text: 'años proyectos de transformación Digital Implementación proyectos tractores de cambio en Entidades Gubernamentales y Sector privado' },
        { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' }
      ],
       choords: {left:undefined ,top:undefined}
    },
      {
        name: 'colombia', text: 'Colombia', image: 'flag-colombia.png', link: 'nosotros/sedes',
        team: { userimage: 'equipo-alvaro.jpg', userName: 'Alvaro' },
        contry: [
          { item: '+ de 300', text: 'mil pacientes Covid atendidos' },
          { item: '+ 800', text: 'mil mensajes de Whatsapp' },                  
          { item: '+ 150', text: 'mil llamadas robotizadas' }                  
        ],
        choords: {left: undefined ,top:undefined}
      },
      {
        name: 'spain', text: 'España', image: 'flag-spain.png', link: 'nosotros/sedes',
        team: { userimage: 'equipo-juan.jpg', userName: 'Jonatan' },
        contry: [
          { item: '+ de 20', text: 'años de trayectoria' },
          { item: '+ de 10', text: 'proyectos de transformación digital a través de la omicanalidad en organizaciones públicas y privadas.' },
          { item: '1er', text: ' Laboratorio de innovación, investigación y desarrollo SILICE' }
        ],
        choords: {left:undefined ,top:undefined}
      }
    
  ]
  changeCanvas=false;
  ngOnInit() {
    this.addCountries()
    setTimeout(()=>{
      if(this.selectedCountry == undefined)this.selectedCountry = this.sedes[Math.floor(Math.random()*(this.sedes.length))].name;
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

      default:
        break;
    }
    let detailDataMapaMundi =document.querySelector('#DetailDataMapaMundi').getBoundingClientRect();
    this.sedes.filter(e=>e.name==name)[0]['choords'].top = _size.top - detailDataMapaMundi.top ;
    this.sedes.filter(e=>e.name==name)[0]['choords'].left = _size.left - detailDataMapaMundi.left ;
  
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
