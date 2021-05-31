import { Component, OnInit } from '@angular/core';
import { SiblingsService } from '../../../services/siblings.service';

@Component({
  selector: 'page-somos',
  templateUrl: './page-somos.component.html',
  styleUrls: ['./page-somos.component.scss']
})

export class PageSomosComponent implements OnInit {
  _idYoutube:number=0;

  constructor(
    private siblingsService: SiblingsService
  ) {
    this.siblingsService.nosotrosVideo$.subscribe(idYT=>{
      this._idYoutube=idYT
    })
  }

  ngOnInit() {  
  }

  idYoutube(idYT){
    this._idYoutube=idYT;
  }
  openModal() {
    if(this._idYoutube==0) return
    this.siblingsService.modifyModal(true,this._idYoutube);
  }
}
