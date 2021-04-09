import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  constructor() { }

  private emoji = new Subject<string>()
  private _sendClick = new Subject<string>()
  emoji$ = this.emoji.asObservable()
  sendClick$ = this._sendClick.asObservable()


  addemoji(emoji) {
    this.emoji.next(emoji)
  }
  sendClick(text) {
    this._sendClick.next(`click: ${text}`)
  }
}
