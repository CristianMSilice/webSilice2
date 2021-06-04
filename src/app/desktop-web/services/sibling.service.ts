import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingsService {

  

  private _showModal = new Subject<{ value: boolean, id: number }>();
  showModal$ = this._showModal.asObservable();

  private _youtubeReady = new BehaviorSubject<Boolean>(false);
  youtubeReady$ = this._youtubeReady.asObservable();

  private _principalVideo = new Subject<number>();
  principalVideo$ = this._principalVideo.asObservable();

  private _nosotrosVideo = new Subject<number>();
  nosotrosVideo$ = this._nosotrosVideo.asObservable(); 

  constructor(){
    window['onYouTubeIframeAPIReady'] = () => this.youtubeReady(true);
    
  }


  modifyModal(value: boolean, id: number) {
    this._showModal.next({ value, id });
  }

  youtubeReady(value){
    this._youtubeReady.next(value);
  }

  principalVideo(id){
    if(id == undefined) return
    this._principalVideo.next(id)
  }

  nosotrosVideo(id){
    if(id == undefined) return
    this._nosotrosVideo.next(id)
  }

}
