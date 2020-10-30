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
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { SecurityContext } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2';
import { NgxLinkifyjsService } from 'ngx-linkifyjs';

import { EncsessionService } from '../shared/helpers/encsession.service';
const rand = max => Math.floor(Math.random() * max)


@Component({
  selector: 'chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],

  providers: [EncsessionService],

  animations: [fadeInOut, fadeIn, SlideInOutAnimation],
})
export class ChatWidgetComponent implements OnInit {
  //@ViewChild('bottom') bottom: ElementRef
  //@ViewChild('scrollMe') private myScrollContainer: ElementRef; 
  @ViewChild('scrollMe', { static: false, read: ElementRef }) private myScrollContainer: ElementRef;
  @Input() public theme: 'blueno' | 'greyno' | 'redno' = 'blueno'

  valido: boolean = false;
  nuestraUrl: string = ''
  action = Action;

  msgList: any[] = [];
  messageContent: string;
  ioConnection: any;
  menuStatet: string = 'out';
  menuStatet2: string = 'out';
  cookieValue: string;
  avatar_cab: string = GlobalService.AVATAR_CAB;
  icon_cancel: string = GlobalService.ICON_CANCEL;
  texto_cab: string = GlobalService.TEXTO_CAB;
  isMobileResolution: boolean;
  pp: string = ' <p>Hola, bienvenido de nuevo asdf</p> ';

  constructor(private socketService: SocketService,
    private sanitizer: DomSanitizer,
    public linkifyService: NgxLinkifyjsService,
    private encsessionService: EncsessionService,
    private cookieService: CookieService, @Inject(TOKEN) public _token?: string) {

  }
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
    avatar: '',
  }

  public messages = []

  public addMessage(from, text, type: 'received' | 'sent', tipo, file_mime) {
    let msg = {
      from,
      text,
      type,
      tipo,
      file_mime,
      date: new Date().getTime(),
    }
    let fila = {
      from: from,
      text: text,
      type: type,
      tipo: tipo,
      file_mime: file_mime,
      date: msg.date
    }
 
   if (this.messages==undefined) this.messages=[];
    this.messages.unshift(msg)
    this.trabajarMsg(fila)

    setTimeout(() => this.scrollToBottom(), 800)


  }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

    /* this.msgList.push({
       from:-1,
       text:"",
       type:"",
       tipo:0,
       file_mime:"",
       date:""
     })*/



    //this._token='Apfee6R+yalDdomE3Oo/ejzxzmMhSr8HMFn8qqeWkA8=';
    setTimeout(() => this.visible = false, 1000)
    if (!this.isMobileResolution)
      this.comprobarDatos();



  }
  private comprobarDatos() {
    if (!this.cookieService.check(GlobalService.NM_COOKIE)) {

      // console.log("NO Cooki")
      this.valido = false;
      setTimeout(() => {
        this.addMessage(this.operator, GlobalService.TXT_INICIAL, 'received', 1, '')
      }, 1500)
      this.encsessionService.remove

      this.encsessionService.codif(this.msgList, GlobalService.NM_COOKIE);


    }
    else {

      this.cookieValue = this.cookieService.get(GlobalService.NM_COOKIE);
      this.client.id = this.cookieValue;
      this.misDatos()
      try {
        this.msgList = this.encsessionService.descodif(GlobalService.NM_COOKIE);
        this.messages = this.msgList
       
        setTimeout(() => {
          this.visible = true;
          setTimeout(() => {
            this.scrollToBottom()
            this.focusMessage()
          }, 0)
        }, 1500)
  

       
      } catch (error) {
        console.log(error)
      }


   



    }
  }
  private login() {
    this.socketService.getLogin2(this.client.name, this._token).subscribe(
      data => {

        if (!data.error) {
          this.client.id = data.data.id;

          var expire = new Date();
          var time = Date.now() + ((3600 * 1000) * 6); // current time + 6 hours ///
          expire.setTime(time);


          this.cookieService.set(GlobalService.NM_COOKIE, this.client.id.toString(), expire);
          this.initIoConnection();
          // let texto = "Bienvenido " + this.client.name
          //this.addMessage(this.operator, texto, 'received', 1,'')



          this.socketService.send(this.client, '/start', this._token);
          this.valido = true;
        } else {
          // console.log(data.mensaje)
        }

      },
      error => {
        console.log(error.status)
      },
      () => { }
    );
  }
  private misDatos() {
    this.socketService.getMisDatos(this.client.id, this._token).subscribe(
      data => {

        if (!data.error) {

          this.client.name = data.data.username;
          this.valido = true;

          /*  setTimeout(() => {
              this.addMessage(this.operator, 'Hola, bienvenido de nuevo ' + this.client.name, 'received', 1, '')
            }, 1500)*/
          this.initIoConnection();


        } else {
          // console.log(data.mensaje)
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

      //this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      this.myScrollContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });


    } catch (err) {
      // console.log("error scroll")
      // console.log(err.message)
    }
  }

  public focusMessage() {
    this.focus.next(true)
  }

  //  '<span><a href="https://t.me/adiper_bot" >   <img src="assets/te.png"  >    </a> </span>',
  public openMobil() {
    swal.fire({
      title: '',
      type: 'info',
      html:
        '<p>Para contactar con nosotros via movil, disponemos de los siguientes canales,</p> ' +
        '<span><a href="https://api.whatsapp.com/send?phone=' + GlobalService.CONTACT_WAS + '" >   <img src="assets/wa.png"  >    </a> </span>',//+
      // '<span><a href="https://t.me/pau_cableonda_bot" >   <img src="assets/te.png"  >    </a> </span>',


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
  public closeButom() {

    $('.chatbubble').removeClass('open');
    $('.bot_btclose').removeClass('open');

    $('#componetchat').hide();



  }

  public openButom() {

    $('.chatbubble').toggleClass('open');
    $('.bot_btclose').toggleClass('open');
    $('#componetchat').show();
  }

  selectComando = (comando) => {



    this.socketService.send(this.client, comando, this._token);


    this.addMessage(this.client, comando, 'sent', 1, '')
    this.ocultarTarjetas();
  }

  public sendMessage({ message }) {


    if (message.trim() === '') {
      return
    }
    if (!this.valido) {
      this.client.name = message.trim();
      this.addMessage(this.client, message, 'sent', 1, '')
      this.login();
    }
    else {
      this.socketService.send(this.client, message, this._token);
      this.addMessage(this.client, message, 'sent', 1, '')
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
  private trabajarMsg(msg: any) {
    this.msgList = this.encsessionService.descodif(GlobalService.NM_COOKIE);
    if (this.msgList==undefined)
    {
      this.msgList=[];
    }
    else
    {
      let i = 0;
  
      if (this.msgList.length > 110) {
        for (let index = 110; index < this.msgList.length; index++) {
          this.msgList.splice(i, 1);
          i++;
        }
      }
    }
   



    this.msgList.unshift(msg)

    this.encsessionService.codif(this.msgList, GlobalService.NM_COOKIE);

  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((respuesta: any) => {
        // this.operator.name=respuesta.usuario.name;
        //this.operator.avatar=respuesta.usuario.avatar;
        if (respuesta.message.search("deleteMensaje") != '-1') {

          this.messages = [];
          this.comprobarDatos();
        }
        else {

          if (respuesta.tipo == 1)
            this.addMessage(this.operator, respuesta.message, 'received', 1, '')
          else if (respuesta.tipo == 2) {

            let mime = respuesta.mime;
            this.addMessage(this.operator, respuesta.file, 'received', 2, mime)

          }
        }

      });

    this.ioConnection = this.socketService.onError()
      .subscribe((respuesta: any) => {
        console.log("error")


        this.addMessage(this.operator, respuesta.message, 'received', 1, '')


      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        this.socketService.adduser(this.client, this._token);


      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        /* console.log('disconnected');
         setTimeout(() => {
           this.addMessage(this.operator, 'Desconectado', 'received', 1,'')
         }, 1500)*/

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
  ocultarTarjetas2 = () => {

    this.menuStatet2 = this.menuStatet2 === 'out' ? 'in' : 'out';
  }
  paserLink(html: string): SafeHtml {



    var div = document.createElement("div");
    div.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, html);
    return this.linkifyService.linkify(div.textContent) || this.linkifyService.linkify(div.innerText);





  }
  esnuestro(texto): boolean {

    return texto.includes('url.pau.zone')
    // return texto.includes(':8100')
  }
  goToLink2(link) {
    this.nuestraUrl = link
    this.ocultarTarjetas2()
  }


}
