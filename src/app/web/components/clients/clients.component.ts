import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit {

  clients: { 'photo': string }[] = [
    { photo: 'logo (1).png' },
    { photo: 'logo (2).png' },
    { photo: 'nuevo_logo2.png' },
    { photo: 'logo (4).png' },
    { photo: 'logo (5).png' },
    { photo: 'logo (6).png' },
    { photo: 'logo (7).png' },
    { photo: 'logo (8).png' },
    { photo: 'logo (9).jpg' },
    { photo: 'logo (10).jpg' },
    { photo: 'logo (11).jpg' },
    { photo: 'logo (12).jpg' },
    { photo: 'logo (13).jpg' },
    { photo: 'logo (14).jpg' },
    { photo: 'logo (15).jpg' },
    { photo: 'logo (16).jpg' },
    { photo: 'logo (17).jpg' },
    { photo: 'logo (18).jpg' },
    { photo: 'logo (19).png' },
    { photo: 'logo (20).png' },
    { photo: 'logo (21).png' },
    { photo: 'logo (22).png' },
    { photo: 'logo (23).png' },
    { photo: 'logo (24).png' },
    { photo: 'logo (25).png' },
    { photo: 'logo (26).png' },
    { photo: 'logo (27).png' },
    { photo: 'logo (28).png' },
    { photo: 'logo (29).png' },
    { photo: 'logo (30).png' },
    { photo: 'logo (31).png' },

  ]
  selectedItem: number = 0;
  sentido: boolean = false // false rigth or ++ , true left or --
  constructor(private sanitizer: DomSanitizer) { }
  ngAfterViewInit() {
    setInterval(() => {
      if (this.sentido) {
        if (this.selectedItem <  this.clients.length - 7) {
          this.selectedItem++;
        } else {
          this.selectedItem--;
          this.sentido = false
        }
        
      }
      else { 
        if (this.selectedItem > 0) {
          this.selectedItem--;
        } else {
          this.selectedItem++;
          this.sentido = true
        }
      }
    }, 3000);
  }
  translatexs() {
    // calc(0px - ( var(--width-slider-item) + var(--padding-slider-item)) * 24)
    return this.sanitizer.bypassSecurityTrustStyle(`translateX( calc(0px - ( var(--width-slider-item) + var(--padding-slider-item)) * ${this.selectedItem} ) )`)
  }
}
