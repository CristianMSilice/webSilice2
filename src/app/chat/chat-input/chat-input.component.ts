import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'chat-input',
  template: `
  <div class="aivochat-input">
    <textarea type="text" class="chat-input-text" placeholder="Indica tu mensaje..."
              #message (keydown.enter)="onSubmit()" (keyup.enter)="message.value = ''" (keyup.escape)="dismiss.emit()"></textarea>
              <button class="aivochat-send custom-color"   (click)="onSubmit()">
              <i class="material-icons">send</i> 
              </button>           
   </div>
                   
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent implements OnInit {
  @Input() public buttonText = '↩︎'
  @Input() public focus = new EventEmitter()
  @Output() public send = new EventEmitter()
  @Output() public dismiss = new EventEmitter()
  @ViewChild('message') message: ElementRef

  ngOnInit() {
    this.focus.subscribe(() => this.focusMessage())
  }

  public focusMessage() {
    this.message.nativeElement.focus()
  }

  public getMessage() {
    return this.message.nativeElement.value
  }

  public clearMessage() {
    this.message.nativeElement.value = ''
  }

  onSubmit() {
    const message = this.getMessage()
    if (message.trim() === '') {
      return
    }
    this.send.emit({ message })
    this.clearMessage()
    this.focusMessage()
  }

}
