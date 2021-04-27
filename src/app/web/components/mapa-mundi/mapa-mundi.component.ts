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
      svgName: 'panama', name: 'Panamá', photo: 'colombia.jpg', 
      date:'',
      proyects:[
        {name:'',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'colombia', name: 'Colombia', photo: 'colombia.jpg', 
      date:'',
      proyects:[
        {name:'',resume:'',date:''}
      ],
       choords: {left:undefined ,top:undefined}
    },
    {
      svgName: 'spain', name: 'España', photo: 'colombia.jpg', 
      date:'Enero 20, 2001',
      proyects:[
        {name:'SIA',resume:'Instalación de PAU en españa',date:'2005'},
        {name:'SMALLSHI',resume:'resolviendo la necesidad de',date:'2012'},
        {name:'OMNITURNO',resume:'se instaló en x ciudad de',date:'2020'}
      ],
       choords: {left:undefined ,top:undefined}
    },   
  ]
  changeCanvas=false;
  ngOnInit() {
    this.addCountries()
    setTimeout(()=>{
      if(this.selectedCountry == undefined)this.selectedCountry = this.sedes[Math.floor(Math.random()*(this.sedes.length))].svgName;
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
    console.log(child)
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
    this.sedes.filter(e=>e.svgName==name)[0]['choords'].top = _size.top - detailDataMapaMundi.top ;
    this.sedes.filter(e=>e.svgName==name)[0]['choords'].left = _size.left - detailDataMapaMundi.left ;
  
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
