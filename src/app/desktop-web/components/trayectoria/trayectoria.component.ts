import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataWpService } from '../../services/data-wp.service';

@Component({
  selector: 'c-trayectoria',
  templateUrl: './c-trayectoria.component.html',
  styleUrls: ['./c-trayectoria.component.scss']
})
export class cTrayectoriaComponent implements OnInit {

  public data: any
  selectedOption = 0;
  offset = { interval: null, value: 0 };
  velocity = { direction: -1, value: 1.5 }
  size = null;

  
  constructor(
    private dataWpService: DataWpService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.dataWpService.getTrayectoria('trayectoria').subscribe(res => this.data = res)
  }
  


  // ngAfterViewInit() {
  //   this.size = document.querySelector('#container1').getBoundingClientRect().width;
  //   if (this.size) this.automovement();
  // }

  step(num) {
    num = parseInt(num)
    let step = this.selectedOption + num;
    if (this.reviewIfOverLoad(step)) return
    this.selectedOption = step;
    this.offset.value = 0;
    this.velocity.direction = - num / Math.abs(num);
  }

  reviewIfOverLoad(data) {
    // devuelve true si se sale del slider
    return data < 0 || data > this.data.length - 1
  }

  automovement() {
    this.offset.interval = setInterval(() => {
      const a = this.selectedOption - this.velocity.direction;
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
