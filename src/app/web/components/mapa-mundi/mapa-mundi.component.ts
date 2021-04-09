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
  selectedCountry;
  sedes = [
    {
      name: 'panama', text: 'Panamá', image: 'flag-panama.png', link: 'experiencia/sedes',
      team: { userimage: 'equipo-jonatan.jpg', userName: 'Jonatan' },
      contry: [
        { item: '+10 años', text: 'proyectos de transformación Digital' },
        { item: '+10', text: 'años proyectos de transformación Digital Implementación proyectos tractores de cambio en Entidades Gubernamentales y Sector privado' },
        { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' }
      ],
       choords: {left:undefined ,top:undefined}
    },
      {
        name: 'colombia', text: 'Colombia', image: 'flag-colombia.png', link: 'experiencia/sedes',
        team: { userimage: 'equipo-alvaro.jpg', userName: 'Alvaro' },
        contry: [
          { item: '+ de 300', text: 'mil pacientes Covid atendidos' },
          { item: '+ 800', text: 'mil mensajes de Whatsapp' },                  
          { item: '+ 150', text: 'mil llamadas robotizadas' }                  
        ],
        choords: {left: undefined ,top:undefined}
      },
      {
        name: 'spain', text: 'España', image: 'flag-spain.png', link: 'experiencia/sedes',
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
        this.drawCircle(country)
      })
    }, 200);
  }

  drawCircle(child: SVGPathElement) {
    let web = document.querySelector('web');
   

    let name = child.getAttribute('title').toLowerCase()
    let _size = child.getBoundingClientRect();
    let size = this.newSizeDotsContry(_size, child, web,name);
    
    let div = document.createElement('div');
    div.classList.add('dotCountry');
    div.style.top = `${size.top}px`;
    div.style.left = `${size.left}px`;

    div.addEventListener('click', event => {
      this.pais(name);
    });
    web.append(div)
  }
  newSizeDotsContry(size, child, web,name) {
    let websize = web.getBoundingClientRect();
    // ************ OPEN CANVAS ****************//
    // let offsiteCanvas = document.querySelector('experiencia div.relative.w100.h100').getBoundingClientRect();
    // let mh = 1000/offsiteCanvas.height;
    // let mw = 1000/offsiteCanvas.width;
    // ************ CLOSE CANVAS ****************//
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


    // ************ OPEN CANVAS ****************//
    // if(! this.sedes.filter(e=>e.name==name)[0]['choords']) this.sedes.filter(e=>e.name==name)[0]['choords'] = {}
    // this.sedes.filter(e=>e.name==name)[0]['choords'].top = (_size.top*1.163 - offsiteCanvas.top  ) * mh;
    // this.sedes.filter(e=>e.name==name)[0]['choords'].left = (_size.left - offsiteCanvas.left ) * mw;
    // this.drawLine({... this.sedes.filter(e=>e.name==name)[0]['choords']})
    // ************ CLOSE CANVAS ****************//
    
    _size = {
      top: _size.top  - websize.top,
      left: _size.left - websize.left
    }

    return _size;
  }



  drawLine({left,top}){
    let y=(250 + top)/2 ;
    let x=750;
    let canvas:HTMLCanvasElement= document.querySelector('#lineCanvas');
    this.changeCanvas=false;
    setTimeout(() => {
      var ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath()
      ctx.lineJoin = "round";
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255, 105, 41)";
      ctx.moveTo(left,top)
      ctx.lineTo(left,y)
      ctx.moveTo(left,y)
      ctx.lineTo(x,y)
      ctx.stroke();
      this.changeCanvas=true;
    }, 600);
    
  }

  myTransform(x,y): SafeStyle {
    return this._sanitizer.bypassSecurityTrustStyle(`scale(0.1) translate(${x}px,${y}px) `);
  }


}
