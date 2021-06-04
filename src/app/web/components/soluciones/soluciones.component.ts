import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { DataWpService } from '../../services/datawp.service';
import { SiblingsService } from '../../services/siblings.service';

@Component({
  selector: 'soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent implements OnInit {
  public data: any 

  constructor(
    private dataWpService: DataWpService,
    private sanitizer: DomSanitizer,
    private SiblingService: SiblingsService
  ) { }

  ngOnInit() {
    this.dataWpService.getSomos('silice-soluciones').subscribe(res => this.data = res)
  }

  selectedOption = 0;
  offset = { interval: null, value: 0 };
  velocity = { direction: -1, value: 1.5 }
  size = null;
  changing = false;

  // ngAfterViewInit() {
  //   this.size = document.querySelector('#articulo_1').getBoundingClientRect().width;
  //   if (this.size) this.automovement();
  // }

  step(num) {
    let step = this.selectedOption + parseInt(num);
    if (step < 0 || step > this.data.length - 1) return
    this.selectedOption = step;
  }

  reviewIfOverLoad(data) {
    // devuelve true si se sale del slider
    return data < 0 || data > this.data.length - 1
  }
  automovement() {
    this.offset.interval = setInterval(() => {
      const a = this.selectedOption - this.velocity.direction ;
      if (this.reviewIfOverLoad(a))this.velocity.direction *= -1;
        if (Math.abs(this.offset.value + this.velocity.value) > this.size) {
          this.offset.value = 0;
          this.step(this.velocity.direction);
        } else {
          this.offset.value += this.velocity.value * this.velocity.direction;
        }

    }, 150)
  }

  movement() {
    return this.sanitizer.bypassSecurityTrustStyle(`translate( calc(${-100 * this.selectedOption}% + ${this.offset.value}px),0px)`)
  }

}
