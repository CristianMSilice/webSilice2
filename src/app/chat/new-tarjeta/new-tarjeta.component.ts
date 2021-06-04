import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-new-tarjeta',
  templateUrl: './new-tarjeta.component.html',
  styleUrls: ['./new-tarjeta.component.scss']
})
export class NewTarjetaComponent  {
  iframeURL:SafeResourceUrl;
  @Input() url: string;
  @Input()
  deleteHandler: Function;
  constructor(private sanitizer: DomSanitizer  ) { 

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
