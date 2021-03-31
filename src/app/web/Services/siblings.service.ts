import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingsService {
  
  private _showModal = new Subject<boolean>();
  showModal$ = this._showModal.asObservable();

  constructor() { }

  modifyModal(value:boolean){
    this._showModal.next(value);
  }
}
