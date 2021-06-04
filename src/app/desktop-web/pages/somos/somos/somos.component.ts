import { Component } from '@angular/core';
import { SiblingsService } from 'src/app/desktop-web/services/sibling.service';

@Component({
  selector: 'somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.scss']
})
export class SomosComponent   {

  _idYoutube:number=0;

  constructor(
    private siblingsService: SiblingsService
  ) {
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
