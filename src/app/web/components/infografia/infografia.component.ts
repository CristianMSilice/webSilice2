import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../services/datawp.service';

@Component({
  selector: 'infografia',
  templateUrl: './infografia.component.html',
  styleUrls: ['./infografia.component.scss']
})
export class NosotrosInfografiaComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getSomos('infografia').subscribe(res => this.data = res)
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
