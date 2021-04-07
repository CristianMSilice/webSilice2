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
    , { expected: 98, before: '', after: '%', initial: 1, text: 'Fusce nec at rhoncus' }
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
      dato.interval = setInterval(()=>{
        if (dato.expected > dato.initial) {
          dato.initial= dato.initial + 1;
        }
        else{
          clearInterval(dato.interval);
        }
      },timeStep)
    })
  }
}
