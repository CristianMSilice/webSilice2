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
  @ViewChild('message', {static: false}) message: ElementRef
  @Output() public toggleAttOptions = new EventEmitter<string>()
  showOptions = false
  ngOnInit() {
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
    console.log(message)
    this.send.emit(message)
    this.clearMessage()
    this.focusMessage()
  }

  toggleOptions() {
    this.showOptions=(this.showOptions==true)?false:true;
  }
  toggleAttachedOptions(){
    this.toggleAttOptions.emit();
  }


  /* public addEmoji(event){
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
  } */
}
