import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DataWpService } from '../../services/datawp.service';

@Component({
  selector: 'presencia',
  templateUrl: './presencia.component.html',
  styleUrls: ['./presencia.component.scss']
})
export class NosotrosPresenciaComponent implements OnInit {
  public data: any

  choordsArr = 
  {
      choords: {
        left:undefined,
        top:undefined
      }
  }

  constructor(
    private dataWpService: DataWpService,
    private _sanitizer:DomSanitizer
  ) { }

  countries;
  selectedCountry=undefined;
  changeCanvas=false;

  ngOnInit() {
    this.dataWpService.getSomos('ciudades').subscribe(res => {
      this.data = res
    })

    this.addCountries()

    setTimeout(()=>{
      if(this.selectedCountry == undefined)this.selectedCountry = this.data[Math.floor(Math.random()*(this.data.length))].acf.nombre_svg_soluciones;
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
    let detailDataMapaMundi = document.querySelector('#DetailDataMapaMundi').getBoundingClientRect();

    this.data.filter((e: { acf: { nombre_svg_soluciones: string; }; }) => {
      e.acf.nombre_svg_soluciones.toLowerCase() == name
    })[0].top = _size.top - detailDataMapaMundi.top 

    this.data.filter((e: { acf: { nombre_svg_soluciones: string; }; }) => {
      e.acf.nombre_svg_soluciones.toLowerCase() == name
    }).left = _size.left - detailDataMapaMundi.left 
  
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
