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
import { SiblingService } from '../shared/services/sibling.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'chat-input',
  templateUrl: `./chat-input.component.html`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./chat-input.component.css', './chat-input-emoji.component.css'],
})
export class ChatInputComponent implements OnInit {
  @Input() public buttonText = '↩︎'
  @Input() public focus = new EventEmitter()
  @Input() public menuPrincipal = '↩︎'
  @Output() public send = new EventEmitter()
  @Output() public dismiss = new EventEmitter()
  @ViewChild('message', { static: false }) message: ElementRef
  @Output() public toggleAttOptions = new EventEmitter<string>()
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
  onSubmit() {
    const message = this.getMessage()
    if (message.value.trim() === '') {
      return
    }
    this.send.emit(message)
    this.clearMessage()
    this.focusMessage()
  }

  toggleOptions() {
    this.showOptions = this.showOptions == true ? false : true
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
