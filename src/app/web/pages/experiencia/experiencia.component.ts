import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  data = [
    { expected: 12, before: '+', after: '', initial: 1, text: 'países alrededor del mundo.' }
    , { expected: 400, before: '+', after: '', initial: 1, text: 'Ciudades.' }
    , { expected: 15, before: '+ de ', after: 'M', initial: 1, text: ' de atenciones alrededor del mundo' }
    , { expected: 98, before: '', after: '%', initial: 1, text: 'Fusce nec at rhoncus' }
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
