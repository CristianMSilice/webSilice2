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

@Component({
  selector: 'chat-input',
  templateUrl: `./chat-input.component.html`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./chat-input.component.css', './chat-input-emoji.component.css'],
})
export class ChatInputComponent implements OnInit {
  @Input() public buttonText = '↩︎'
  @Input() public focus = new EventEmitter()
  @Output() public send = new EventEmitter()
  @Output() public dismiss = new EventEmitter()
  @ViewChild('message', { static: false }) message: ElementRef
  @Output() public toggleAttOptions = new EventEmitter<string>()
  showOptions = false
  supportEmojis: boolean
  ngOnInit() {
    this.supportEmojis = navigator.userAgent
      .toLowerCase()
      .includes('windows nt 10')

    this.focus.subscribe(() => this.focusMessage())
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
    var keyboardEvent: any = document.createEvent('KeyboardEvent')
    var initMethod =
      typeof keyboardEvent.initKeyboardEvent !== 'undefined'
        ? 'initKeyboardEvent'
        : 'initKeyEvent'

    keyboardEvent[initMethod](
      'keydown', // event type : keydown, keyup, keypress
      true, // bubbles
      true, // cancelable
      window, // viewArg: should be window
      true, // ctrlKeyArg
      false, // altKeyArg
      false, // shiftKeyArg
      false, // metaKeyArg
      43, // keyCodeArg : unsigned long the virtual key code, else 0
      0, // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
    )
    document.dispatchEvent(keyboardEvent)
  }
}
