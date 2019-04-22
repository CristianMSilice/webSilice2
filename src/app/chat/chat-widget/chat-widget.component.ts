import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core'
import { Subject } from 'rxjs'
import { fadeIn, fadeInOut } from '../animations'
import { Inject } from '@angular/core';
import { LocalStorage } from "../shared/services/data.service";
import { SocketService } from '../shared/services/socket.service';
import { Action } from '../shared/model/action';
import { Event } from '../shared/model/event';
import { TOKEN } from '../shared/services/config';
import { SlideInOutAnimation } from './animations';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser'
import { CookieService } from 'ngx-cookie-service';

const rand = max => Math.floor(Math.random() * max)

@Component({
  selector: 'chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],

  animations: [fadeInOut, fadeIn, SlideInOutAnimation],
})
export class ChatWidgetComponent implements OnInit {
  //@ViewChild('bottom') bottom: ElementRef
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Input() public theme: 'blueno' | 'greyno' | 'redno' = 'blueno'

  valido: boolean = false;
  action = Action;

  messageContent: string;
  ioConnection: any;
  menuStatet: string = 'out';
  cookieValue: string;
  constructor(private socketService: SocketService,
    private sanitizer: DomSanitizer,
    private cookieService: CookieService, @Inject(TOKEN) public _token?: string) { }


  public _visible = false

  public get visible() {
    return this._visible
  }


  @Input() public set visible(visible) {
    this._visible = visible
    if (this._visible) {
      setTimeout(() => {
        this.scrollToBottom()
        this.focusMessage()
      }, 0)
    }
  }

  public focus = new Subject()

  public operator = {
    name: 'Operador',
    status: 'online',
    avatar: `./assets/logochat_red.svg`,
  }

  public client = {
    id: '',
    name: 'Invitado',
    status: 'online', 
    avatar: `./assets/logo-client.png`,
  }

  public messages = []

  public addMessage(from, text, type: 'received' | 'sent', tipo,file_mime) {
    this.messages.unshift({
      from,
      text,
      type,
      tipo,
      file_mime,
      date: new Date().getTime(),
    })
    setTimeout(() => this.scrollToBottom(), 800)
  }

  public scrollToBottom() {
    /* if (this.bottom !== undefined) {
       this.bottom.nativeElement.scrollIntoView()
     }*/

    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err.message)
    }
  }

  public focusMessage() {
    this.focus.next(true)
  }



  ngOnInit() {
    //this._token='Apfee6R+yalDdomE3Oo/ejzxzmMhSr8HMFn8qqeWkA8=';
    setTimeout(() => this.visible = false, 1000)
  



    if (!this.cookieService.check('__chatsil__')) {
     // console.log("NO Cooki")
      this.valido = false;
      this.socketService.getLogin2(this.client.name, this._token).subscribe(
        data => {

          if (!data.error) {
            this.client.id = data.data.id;
            this.client.name='widget-chat'
            this.initIoConnection();

            this.cookieService.set('__chatsil__', this.client.id.toString());



            this.valido = true;
          } else {
            console.log(data.mensaje)
          }

        },
        error => {
          console.log(error.status)
          //if ()


        },
        () => { }
      );




    }
    else {
      
      this.cookieValue = this.cookieService.get('__chatsil__');
      this.client.id=this.cookieValue;
      this.client.name='widget-chat'
      this.valido = true;
    
      this.initIoConnection();
      //this.socketService.adduser(this.client.id);
      //this.sendNotification(Action.JOINED);
    }



  }

  public openChat() {
    this.visible = true;
  }

  public closeChat() {
    this.visible = false;
  }

  selectComando = (comando) => {



    this.socketService.send(this.client, comando, this._token);


    this.addMessage(this.client, comando, 'sent', 1,'')
  }

  public sendMessage({ message }) {
    //Vemos si es un email


    if (message.trim() === '') {
      return
    }
    if (!this.valido) {
      //let evalido = message.trim().includes("@")


      this.client.name = message.trim();
      this.addMessage(this.client, message, 'sent', 1,'')





    }
    else {


      this.socketService.send(this.client, message, this._token);


      this.addMessage(this.client, message, 'sent', 1,'')

    }




  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === '/') {
      this.focusMessage()
    }
    if (event.key === '?' && !this._visible) {
      this.closeChat()
    }
  }


  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((respuesta: any) => {
        // this.operator.name=respuesta.usuario.name;
        //this.operator.avatar=respuesta.usuario.avatar;
           
        if (respuesta.tipo == 1)
          this.addMessage(this.operator, respuesta.message, 'received', 1,'')
        else if (respuesta.tipo == 2) {

          let mime = respuesta.mime;
          this.addMessage(this.operator, respuesta.file, 'received', 2,mime)


        }

      });

    this.ioConnection = this.socketService.onError()
      .subscribe((respuesta: any) => {
        console.log("error")


        this.addMessage(this.operator, respuesta.message, 'received', 1,'')


      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        this.socketService.adduser(this.client, this._token);
        console.log("conectado")

 
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
        setTimeout(() => {
          this.addMessage(this.operator, 'Desconectado', 'received', 1,'')
        }, 1500)

      });
  }
  public sendNotification(action: Action): void {
    let message: any;

    if (action === Action.JOINED) {
      message = {
        nickname: this.client.name,
        action: action
      }
      this.socketService.join(this.client.name, this._token);
    } else if (action === Action.RENAME) {
      message = {
        action: action,
        nickname: this.client.name,
        message: 'rename',
      };
      this.socketService.send(this.client.name, 'rename', this._token);
    }


  }
  goToLink(url: string) {
    // url = GlobalService.SERVER_ENDPOINT + url;
     window.open(url);
   }
   paserPdf(ruta: string) {
     
    return this.sanitizer.bypassSecurityTrustResourceUrl(ruta);
  }
  ocultarTarjetas = () => {

    this.menuStatet = this.menuStatet === 'out' ? 'in' : 'out';
  }

}
