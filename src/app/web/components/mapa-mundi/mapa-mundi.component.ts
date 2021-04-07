import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { chdir } from 'process';

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
        { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' }
      ]
    }
    
  ]
  // ,
  //   {
  //     name: 'colombia', text: 'Colombia', image: 'flag-panama.png', link: 'experiencia/sedes',
  //     team: { userimage: 'equipo-jonatan.jpg', userName: 'Alvaro' },
  //     contry: [
  //       { item: '+10 años', text: 'proyectos de transformación Digital' },
  //       { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' }
  //     ]
  //   },
  //   {
  //     name: 'spain', text: 'España', image: 'flag-panama.png', link: 'experiencia/sedes',
  //     team: { userimage: 'equipo-jonatan.jpg', userName: 'Jonatan' },
  //     contry: [
  //       { item: '+10 años', text: 'proyectos de transformación Digital' },
  //       { item: '+15', text: 'Proyectos de Omnicanalidad con servicios a Nivel Nacional' }
  //     ]
  //   }
  ngOnInit() {
    this.addCountries()
  }

  pais(pais: string) {
    console.log(`pais: ${pais}`)
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
    let size = this.newSizeDotsContry(_size, child, web);
    let div = document.createElement('div');
    div.classList.add('dotCountry');
    div.style.top = `${size.top}px`;
    div.style.left = `${size.left}px`;
    div.addEventListener('click', event => {
      this.pais(name);
    });
    web.append(div)
  }
  newSizeDotsContry(size, child, web) {
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
    return _size;
  }
}
