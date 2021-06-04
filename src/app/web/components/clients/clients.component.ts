import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit {

  clients: { 'photo': string }[] = [
    { photo: 'logo (1).webp' },
    { photo: 'logo (2).webp' },
    { photo: 'nuevo_logo2.webp' },
    { photo: 'logo (4).webp' },
    { photo: 'logo (5).webp' },
    { photo: 'logo (6).webp' },
    { photo: 'logo (7).webp' },
    { photo: 'logo (8).webp' },
    // { photo: 'logo (9).webp' },
    { photo: 'logo (10).webp' },
    { photo: 'logo (11).webp' },
    { photo: 'logo (12).webp' },
    { photo: 'logo (13).webp' },
    { photo: 'logo (14).webp' },
    { photo: 'logo (15).webp' },
    { photo: 'logo (16).webp' },
    { photo: 'logo (17).webp' },
    { photo: 'logo (18).webp' },
    { photo: 'logo (19).webp' },
    { photo: 'logo (20).webp' },
    { photo: 'logo (21).webp' },
    { photo: 'logo (22).webp' },
    // { photo: 'logo (23).webp' },
    { photo: 'logo (24).webp' },
    { photo: 'logo (25).webp' },
    { photo: 'logo (26).webp' },
    { photo: 'logo (27).webp' },
    { photo: 'logo (28).webp' },
    { photo: 'logo (29).webp' },
    { photo: 'logo (30).webp' },
    { photo: 'logo (31).webp' },

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
