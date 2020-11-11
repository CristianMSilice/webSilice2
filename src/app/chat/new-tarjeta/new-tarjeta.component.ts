import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core'
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import {   SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-new-tarjeta',
  templateUrl: './new-tarjeta.component.html',
  styleUrls: ['./new-tarjeta.component.scss']
})
export class NewTarjetaComponent    implements OnInit {
  iframeURL:SafeResourceUrl;
  @Input() url: string;
  @Input()
  deleteHandler: Function;
  constructor(private sanitizer: DomSanitizer  ) { 
  
     
  
  }
 
  ngOnInit() {
//  console.log(this.url)  
     
}

goBack() {
  this.deleteHandler();
}

ngOnChanges(changes: SimpleChanges) {
  // only run when property "data" changed
  
  if (changes['url']   ) {
   
    this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
   
    
  }
  
} 

}
