import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'mapa-mundi',
  templateUrl: './mapa-mundi.component.html',
  styleUrls: ['./mapa-mundi.component.scss']
})
export class MapaMundiComponent implements OnInit {

  constructor() { }
  countries;
  sedes = [
    {
      name: 'panama', text: 'Panamá', image: 'flag-panama.png', link: 'experiencia/sedes',
      team: { userimage: 'equipo-jonatan.jpg', userName: 'Jonatan' },
      contry: [
        { item: '+10 años', text: 'proyectos de transformación Digital' },
        { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' },
      ],
      // choords: {left:'' ,top:''}
    },
      {
        name: 'colombia', text: 'Colombia', image: 'flag-panama.png', link: 'experiencia/sedes',
        team: { userimage: 'equipo-jonatan.jpg', userName: 'Alvaro' },
        contry: [
          { item: '+10 años', text: 'proyectos de transformación Digital' },
          { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' }
        ]
      },
      {
        name: 'spain', text: 'España', image: 'flag-panama.png', link: 'experiencia/sedes',
        team: { userimage: 'equipo-jonatan.jpg', userName: 'Jonatan' },
        contry: [
          { item: '+10 años', text: 'proyectos de transformación Digital' },
          { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' }
        ]
      }
    
  ]
  changeCanvas=false;
  ngOnInit() {
    this.addCountries()
  }

  pais(pais: string) {
    this.drawLine({... this.sedes.filter(e=>e.name==pais)[0]['choords']})
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
    let offsiteCanvas = document.querySelector('experiencia div.relative.w100.h100').getBoundingClientRect();
    let mh = 1000/offsiteCanvas.height;
    let mw = 1000/offsiteCanvas.width;
    
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
    if(! this.sedes.filter(e=>e.name==name)[0]['choords']) this.sedes.filter(e=>e.name==name)[0]['choords'] = {}
    this.sedes.filter(e=>e.name==name)[0]['choords'].top = (_size.top*1.165 - offsiteCanvas.top  ) * mh;
    this.sedes.filter(e=>e.name==name)[0]['choords'].left = (_size.left - offsiteCanvas.left ) * mw;
    this.drawLine({... this.sedes.filter(e=>e.name==name)[0]['choords']})

    
    _size = {
      top: _size.top  - websize.top,
      left: _size.left - websize.left
    }

    return _size;
  }
  drawLine({left,top}){
    let y=top - 190;
    let x=750;
    let canvas:HTMLCanvasElement= document.querySelector('#lineCanvas');
    this.changeCanvas=false;
    setTimeout(() => {
      var ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath()
      ctx.lineJoin = "round";
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgb(255, 105, 41)";
      ctx.moveTo(left,top)
      ctx.lineTo(left,y)
      ctx.moveTo(left,y)
      ctx.lineTo(x,y)
      ctx.stroke();
      this.changeCanvas=true;
    }, 600);
    
  }
}
