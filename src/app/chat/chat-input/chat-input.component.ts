import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core'
import { selector } from 'rxjs-compat/operator/publish'

@Component({
  selector: 'chat-input',
  template: `
  <div class="silicechat-input">
    <div 
      id="message" 
      type="text" 
      class="chat-input-text" 
      #message
      (keydown.enter)="onSubmit($event)" 
      (keyup.enter)="message.innerHTML = ''" 
      (keyup.escape)="dismiss.emit()"
      contenteditable>
    </div>
    <span style="background-position: 60.7843% 74.5098%;"  class="emoji emoji-icon" (click)="toggleEmojisMenu()"></span>
    <div class="emoji-input hidden selectableOptionInput EmojiMenu"  >            
    <emoji-mart
      [style]="{ position: 'absolute', bottom: '20px', right: '20px' }"
      (emojiClick)="addEmoji($event)">
    </emoji-mart>
    </div>

    <button class="silicechat-send custom-color"   (click)="onSubmit()">
      <i class="material-icons">send</i> 
    </button>           
   </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./chat-input.component.css','./chat-input-emoji.component.css'],
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
  public addEmoji(event){
    
    let emoji  = event.$event.target.cloneNode();
    emoji.setAttribute("contenteditable","false");
    let position = emoji.style.backgroundPosition;
    emoji.classList.add('emoji');
    emoji.style = '';
    emoji.style.backgroundPosition= position;
    let message = this.getMessage();
    message.append(emoji);
    this.focusMessage()
  }  
  public toggleEmojisMenu(){
    let options = document.querySelectorAll('.selectableOptionInput');
    options.forEach(option=>{
    if( option.classList.contains('EmojiMenu')){
      option.classList.toggle('hidden');
    }else{
      option.classList.add('hidden');
    }
    })
     this.focusMessage();
  }
  public getMessage() {
    return this.message.nativeElement
  }

  public clearMessage() {
    this.message.nativeElement.innerHTML = ''
  }
  onSubmit() {
    const message = this.getMessage()
    if (message.textContent.trim() === '') {
      return
    }
    this.send.emit( message );
    this.clearMessage()
    this.focusMessage()
  }

}
