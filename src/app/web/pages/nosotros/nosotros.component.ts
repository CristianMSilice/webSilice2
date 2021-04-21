import { Component } from '@angular/core';
import { SiblingsService } from '../../Services/siblings.service';

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent  {
  _idYoutube:number=0;
  constructor(private siblingsService:SiblingsService) {
    this.siblingsService.nosotrosVideo$.subscribe(idYT=>{
      this._idYoutube=idYT
    })
   }


  idYoutube(idYT){
    this._idYoutube=idYT;
  }
  openModal() {
    if(this._idYoutube==0) return
    this.siblingsService.modifyModal(true,this._idYoutube);
  }
}
