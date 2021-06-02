import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { selector } from 'rxjs-compat/operator/publish'
import { GlobalService } from '../shared/globals'
import { SiblingService } from '../shared/services/sibling.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'chat-input',
  templateUrl: `./chat-input.component.html`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  @Input() public buttonText = '↩︎'
  @Input() public focus = new EventEmitter()
  @Input() public menuPrincipal = '↩︎'
  @Output() public send = new EventEmitter()
  @Output() public dismiss = new EventEmitter()
  @ViewChild('message', { static: false }) message: ElementRef
  @Output() public toggleAttOptions = new EventEmitter<string>()
  icon_send : string = GlobalService.ICON_SEND;
  icon_attached: string = GlobalService.ICON_ATTAC;
  icon_emoji: string = GlobalService.ICON_EMOJI;
  @Output() public toggleMenuprincipal = new EventEmitter<string>()
  showMenuPrincipal = false
  showOptions = false
  supportEmojis: boolean
  toggleemojimenu = false

  constructor(private _SiblingService: SiblingService) {

  }
  ngOnInit() {
    this.supportEmojis = navigator.userAgent
      .toLowerCase()
      .includes('windows nt 10')

    this.focus.subscribe(() => this.focusMessage())
    this.subscribeAddEmoji()
  }

  public focusMessage() {
    this.message.nativeElement.focus()
  }

  public getMessage() {
    return this.message.nativeElement
  }

  public clearMessage() {
    this.message.nativeElement.innerHTML = ''
  }
  onSubmit(e) {
    const message = this.getMessage()
    if (message.value.trim() === '') {
      return
    }
    this.send.emit(message)
    this.clearMessage()
    this.focusMessage()
    message.value = ''
  }

  toggleOptions() {
    this.showOptions = !this.showOptions 
    if(! this.showOptions){
      this.toggleemojimenu=false;
      this.showMenuPrincipal=false;
    }
  }
  toggleAttachedOptions() {
    this.toggleAttOptions.emit()
  }

  toggleEmojisMenu() {
    this.toggleemojimenu = !this.toggleemojimenu
  }

  toggleMenuPrincipal() {
    this.showMenuPrincipal = !this.showMenuPrincipal
    
  }

  sendOption(message) {
    const option = {
      value: message,
    }
    this.send.emit(option)
    this.toggleMenuPrincipal()
  }
  subscribeAddEmoji() {
    this._SiblingService.emoji$.subscribe((emoji) => {
      const div = document.createElement('div')
      div.innerHTML = emoji
      this.message.nativeElement.value += div.innerHTML
    })
  }
}
