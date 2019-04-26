import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core'
import { Subject } from 'rxjs'
import { fadeIn, fadeInOut } from '../animations'
import { Inject } from '@angular/core';
import { GlobalService } from '../shared/globals';
import { SocketService } from '../shared/services/socket.service';
import { Action } from '../shared/model/action';
import { Event } from '../shared/model/event';
import { TOKEN } from '../shared/services/config';
import { SlideInOutAnimation } from './animations';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser'
import { CookieService } from 'ngx-cookie-service';
import swal from'sweetalert2';
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
  avatar_cab:string=GlobalService.AVATAR_CAB;
  texto_cab:string=GlobalService.TEXTO_CAB;
  isMobileResolution: boolean;
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
    avatar: GlobalService.AVATAR_CHAT,
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

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    //this._token='Apfee6R+yalDdomE3Oo/ejzxzmMhSr8HMFn8qqeWkA8=';
    setTimeout(() => this.visible = false, 1000)
    if (!this.isMobileResolution )
  this.comprobarDatos();



  }
  private comprobarDatos()
  {
    if (!this.cookieService.check(GlobalService.NM_COOKIE)) {


      // console.log("NO Cooki")
       this.valido = false;
       setTimeout(() => {
        this.addMessage(this.operator, 'Hola, bienvenido a tu asistente virtual, indica a continuación un nickname para  dirigirnos a usted', 'received', 1,'')
      }, 1500)
 
 
 
     }
     else {
       
       this.cookieValue = this.cookieService.get(GlobalService.NM_COOKIE);
       this.client.id=this.cookieValue;
       this.misDatos()
       //this.socketService.adduser(this.client.id);
       //this.sendNotification(Action.JOINED);
     }
  }
private login()
{
  this.socketService.getLogin2(this.client.name, this._token).subscribe(
    data => {

      if (!data.error) {
        this.client.id = data.data.id;
      

        this.cookieService.set(GlobalService.NM_COOKIE, this.client.id.toString());
        this.initIoConnection();
         let texto = "Bienvenido " + this.client.name
         this.addMessage(this.operator, texto, 'received', 1,'')
        this.valido = true;
      } else {
        console.log(data.mensaje)
      }

    },
    error => {
      console.log(error.status)
    },
    () => { }
  );
}
private misDatos()
{
  this.socketService.getMisDatos(this.client.id, this._token).subscribe(
    data => {

      if (!data.error) {
      console.log(data)
        this.client.name=data.data.username;
        this.valido = true;
      
        setTimeout(() => {
          this.addMessage(this.operator, 'Hola, bienvenido de nuevo '+this.client.name, 'received', 1,'')
        }, 1500)
        this.initIoConnection();

     
      } else {
        console.log(data.mensaje)
      }

    },
    error => {
      console.log(error.status)
    },
    () => { }
  );
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


public openMobil()
{
  swal.fire({
    title: '',
    type: 'info', 
    html:
      '<p>Para contactar con nosotros via movil, disponemos de los siguientes canales,</p> ' +
      '<span><a href="https://api.whatsapp.com/send?phone=+50765273252" >   <img src="assets/wa.png"  >    </a> </span>'+
      '<span><a href="https://m.me/1477223642413982" >   <img src="assets/me.png"  >    </a> </span>',
    
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    
  })

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

      this.login();



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
        console.log(respuesta)


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
