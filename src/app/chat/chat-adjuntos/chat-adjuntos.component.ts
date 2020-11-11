import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core'
import { reviewFile } from './utils/reviewfile'
import { SocketService } from '../shared/services/socket.service'
import { TOKEN } from '../shared/services/config'


@Component({
  selector: 'chat-adjuntos',
  templateUrl: './chat-adjuntos.component.html',
  styleUrls: ['./chat-adjuntos.component.css'],
})
export class ChatAdjuntosComponent {

  // c786b248746c3ef39942ae7567e883b5ce771c0cc775bdf324db14561cba25f9
  @Output() public showoutput = new EventEmitter()
  @Output() public send = new EventEmitter()
  @ViewChild('inputAttachedFile', { static: false }) inputFile: ElementRef
  // @Input() _token:string;
  file: reviewFile
  constructor(private socketService: SocketService,
    @Inject(TOKEN) public _token?: string
    ) {}

  cargarAdjunto() {
    if (!this.file) {
      this.file = new reviewFile(this.inputFile.nativeElement, [
        'image',
        'video',
        'pdf',
      ])
    }
    this.inputFile.nativeElement.click()
  }
  cancelLoadFile(element: HTMLElement) {
    this.file.resetfile()
  }
  sendFile(element: any, kind: String) {
    // let src = element.lastChild.getAttribute('src')
    let tostring = {
      kind: this.file.file.kindfile,
      type: this.file.getMime(),
      source: this.file.LoadedFile,
    }
    
    this.send.emit(JSON.stringify(tostring))
    this.file.file.enabled = false
    this.showoutput.emit(false)
    this.socketService.getLogin2('', this._token).subscribe(
      (data) => {
        if (!data.error) {
          let sendedFile = {
            texto: this.file.LoadedFile,
            file_mime: this.file.getMime(),
            file_token: this._token,
            iduser: data.data.id
          }
          this.socketService.sendFile(sendedFile)

        } else {
        }
      },
      (error) => {
        console.log(error.status)
      },
      () => {},
    )
  }
}
