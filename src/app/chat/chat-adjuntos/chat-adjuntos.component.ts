import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import { reviewFile } from './utils/reviewfile'
import { SocketService } from '../shared/services/socket.service'
import { TOKEN } from '../shared/services/config'
import { GlobalService } from '../shared/globals'

@Component({
  selector: 'chat-adjuntos',
  templateUrl: './chat-adjuntos.component.html',
  styleUrls: ['./chat-adjuntos.component.css'],
})
export class ChatAdjuntosComponent {
 
  // c786b248746c3ef39942ae7567e883b5ce771c0cc775bdf324db14561cba25f9
  @Output() public showoutput = new EventEmitter()
  @Output() public send = new EventEmitter()
  @Input() clientChat: any;
  @ViewChild('inputAttachedFile', { static: false }) inputFile: ElementRef
  // @Input() _token:string;
  file: reviewFile 
  icon_pdf : string = GlobalService.ICON_PDF;
  enviando: boolean=false;
  constructor(private socketService: SocketService,
    @Inject(TOKEN) public _token?: string
    ) {
       
    }

    ngOnChanges(changes: SimpleChanges) {
      // only run when property "data" changed
  
      if (changes['clientChat']) { 
        }
  
  
        
    }


  cargarAdjunto() {
    if (!this.file) {
      this.file = new reviewFile(this.inputFile.nativeElement, [
        'image',
        'video',
      ])
    }
    this.inputFile.nativeElement.click()
  }
  cancelLoadFile(element: HTMLElement) {
    this.file.resetfile()
  }
  sendFile() {
    if (!this.enviando) {
      this.enviando = true;
      let tostring = {
        kind: this.file.file.kindfile,
        type: this.file.getMime(),
        source: this.file.LoadedFile,
      }

      this.send.emit(JSON.stringify(tostring))
      this.file.file.enabled = false
      this.showoutput.emit(false)

      let sendedFile = {
        texto: this.file.LoadedFile,
        file_mime: this.file.getMime(),
        file_token: this._token,
        iduser: this.clientChat
      }
      this.socketService.sendFile(sendedFile)
      this.enviando = false;
    }



  }
}  
