import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-presencia',
  templateUrl: './page-presencia.component.html',
  styleUrls: ['./page-presencia.component.scss']
})
export class PagePresenciaComponent implements OnInit {

  data = [
    { expected: 12, before: '+', after: '', initial: 1, text: 'Países alrededor del mundo' }
    , { expected: 400, before: '+', after: '', initial: 1, text: 'Ciudades' }
    , { expected: 15, before: '+', after: 'M', initial: 1, text: ' de atenciones alrededor del mundo' }
    , { expected: 7, before: '+', after: '', initial: 1, text: 'Sectores económicos' }
  ]
  constructor() { }

  ngOnInit() {
    this.animateData()
  }

  animateData = function () {
    this.data.forEach(dato => {
      let time = 1500 ;
      let timeStep = time/dato.expected;
      let mintime=60;
      let step = 1;
      if(timeStep < mintime) step = Math.ceil(dato.expected / (time/mintime)); 
      dato.interval = setInterval(()=>{
        if (dato.expected > dato.initial) {
          dato.initial= dato.initial + step;
        }
        else{
          dato.initial=dato.expected
          clearInterval(dato.interval);
        }
      },timeStep)
    })
  }
}