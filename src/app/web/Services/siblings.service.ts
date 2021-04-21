import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingsService {

  private _showModal = new Subject<{ value: boolean, id: number }>();
  showModal$ = this._showModal.asObservable();

  modifyModal(value: boolean, id: number) {
    this._showModal.next({ value, id });
  }

  private _principalVideo = new Subject<number>();
  principalVideo$ = this._principalVideo.asObservable();

  principalVideo(id){
    if(id == undefined) return
    this._principalVideo.next(id)
  }

  private _nosotrosVideo = new Subject<number>();
  nosotrosVideo$ = this._nosotrosVideo.asObservable(); 

  nosotrosVideo(id){
    if(id == undefined) return
    this._nosotrosVideo.next(id)
  }

 
}
