import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  constructor() { }

  private emoji = new Subject<string>()
  emoji$ = this.emoji.asObservable()

  addemoji(emoji) {
    this.emoji.next(emoji)
  }
}
