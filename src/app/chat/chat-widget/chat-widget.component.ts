import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Subject } from 'rxjs'
import { fadeIn, fadeInOut } from '../animations'
import { Inject } from '@angular/core'
import { GlobalService } from '../shared/globals'
import { SocketService } from '../shared/services/socket.service'
import { Action } from '../shared/model/action'
import { Event } from '../shared/model/event'
import { TOKEN } from '../shared/services/config'
import { SlideInOutAnimation } from './animations'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { SecurityContext } from '@angular/core'
import { SafeHtml } from '@angular/platform-browser'
import { CookieService } from 'ngx-cookie-service'
import swal from 'sweetalert2'
import { NgxLinkifyjsService } from 'ngx-linkifyjs'

import { EncsessionService } from '../shared/helpers/encsession.service'
import { ChatAdjuntosComponent } from '../chat-adjuntos/chat-adjuntos.component'
@Component({
  selector: 'chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: [
    './header.css',
    './message.css',
    './chat-widget.component.css'],
  providers: [EncsessionService],
  animations: [fadeInOut, fadeIn, SlideInOutAnimation],
})
export class ChatWidgetComponent implements OnInit {
  //@ViewChild('bottom') bottom: ElementRef
  //@ViewChild('scrollMe') private myScrollContainer: ElementRef; 
  // @ViewChild('scrollMe', { static: false, read: ElementRef }) private myScrollContainer: ElementRef;
  @ViewChild('widgetBody', { static: false }) widgetBody: ElementRef
  @ViewChild(ChatAdjuntosComponent, { static: false }) AdjuntosComponent: ChatAdjuntosComponent
  @Input() public theme: 'blueno' | 'greyno' | 'redno' = 'blueno'
  supportEmojis;
  valido: boolean = false;
  nuestraUrl: string = ''
  action = Action;
  banderaScroll = true;

  msgList: any[] = [];
  messageContent: string;
  ioConnection: any;
  menuStatet: string = 'out';
  menuStatet2: string = 'out';
  cookieValue: string;
  avatar_cab: string = GlobalService.AVATAR_CAB;
  icon_cancel: string = GlobalService.ICON_CANCEL;
  texto_cab: string = GlobalService.TEXTO_CAB;
  close_able_chat = GlobalService.CLOSE_ABLE_CHAT;
  public _visible = true

  isMobileResolution: boolean;
  pp: string = ' <p>Hola, bienvenido de nuevo asdf</p> ';
  filetosend: HTMLInputElement;
  menuPrincipal = { options: [{ texto: '', accion: '' }], enabled: false }
  innerWidth: number
  constructor(
    private socketService: SocketService,
    private sanitizer: DomSanitizer,
    public linkifyService: NgxLinkifyjsService,
    private encsessionService: EncsessionService,
    private cookieService: CookieService,
    @Inject(TOKEN) public _token?: string) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) { this.calcResize() }
  ngOnInit() {
    this.calcResize();
    this.comprobarDatos()
    this.DOMLOADED();
  }


  calcResize() {
    this.isMobileResolution = window.innerWidth <= 768;

    this.close_able_chat = (this.isMobileResolution)
      ? true
      : GlobalService.CLOSE_ABLE_CHAT;

    console.log(window.innerWidth, this.isMobileResolution)
  }


  public get visible() {
    return this._visible
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


  createbuttons(buttons) {
    let div = document.createElement('div');
    div.classList.add('message-buttons-array');
    buttons.forEach(button => {
      let div1 = document.createElement('div');
      div1.classList.add('message-button-option');
      div1.textContent = button.texto;
      div1.style.borderColor = button.color;
      div1.style.color = button.color;
      div1.setAttribute('action', button.accion);
      div1.setAttribute('state', 'enabled');
      div.appendChild(div1)
    });

    return div;
  }

  reviewOptions(event) {
    let button: Element = event.target;
    let state = button.getAttribute('state');
    let message = {
      value: button.getAttribute('action')
    };
    if (state == 'enabled') {
      button.parentElement.childNodes.forEach((optionBtn: Element) => {
        optionBtn.classList.add('disabled');
        optionBtn.setAttribute('state', 'disabled');
      })
      button.classList.add('selectable');
      this.sendMessage(message);
    }
  }


  
  private comprobarDatos() {
    if (!this.cookieService.check(GlobalService.NM_COOKIE)) {
      this.valido = false
      setTimeout(() => {
        // Texto inicial que se indica englobal para iniciar el chat
        this.addMessage(
          this.operator,
          GlobalService.TXT_INICIAL,
          'received',
          1,
          '',
        )
      }, 1500)

      this.encsessionService.remove
      this.encsessionService.codif(this.msgList, GlobalService.NM_COOKIE)
      this.login()
    }
    else {
      // SI exite la cokkie
      try {
        this.msgList = this.encsessionService.descodif(GlobalService.NM_COOKIE);
        if (this.msgList == undefined) {
          this.valido = false
          setTimeout(() => {
            //Texto inicial que se indica englobal para iniciar el chat
            this.addMessage(
              this.operator,
              GlobalService.TXT_INICIAL,
              'received',
              1,
              '',
            )
          }, 1500)
          this.msgList = []
          this.encsessionService.remove
          this.encsessionService.codif(this.msgList, GlobalService.NM_COOKIE);
          this.login()
        }
        else {
          this.cookieValue = this.cookieService.get(GlobalService.NM_COOKIE);

          this.client.id = this.cookieValue;
          this.misDatos()
          this.messages = this.msgList
          //   console.log(this.msgList)

          setTimeout(() => {

            this._visible = true //cambiado
            setTimeout(() => {
              this.scrollToBottom(this.widgetBody.nativeElement, 200)
              this.focusMessage()
            }, 0)
          }, 1500)
        }

      } catch (error) {
        this.valido = false
        setTimeout(() => {
          // Texto inicial que se indica englobal para iniciar el chat
          this.addMessage(
            this.operator,
            GlobalService.TXT_INICIAL,
            'received',
            1,
            '',
          )
        }, 1500)
        this.encsessionService.remove
        this.encsessionService.codif(this.msgList, GlobalService.NM_COOKIE)
        this.login()
      }
    }
  }


  private login() {
    this.socketService.getLogin2(this.client.name, this._token).subscribe(
      (data) => {
        if (!data.error) {
          this.client.id = data.data.id
          var expire = new Date()
          var time = Date.now() + ((3600 * 1000) * 24) // current time + 6 hours ///
          expire.setTime(time)
          this.cookieService.set(GlobalService.NM_COOKIE, this.client.id.toString(), expire);
          this.initIoConnection();
          //console.log("almacenos la cookei")
          // let texto = "Bienvenido " + this.client.name
          //this.addMessage(this.operator, texto, 'received', 1,'')

          // this.socketService.send(this.client, '/start', this._token)
          this.valido = true
        } else {
          console.log(data.mensaje)
        }
      },
      (error) => {
        console.log(error.status)
      },
      () => { },
    )
  }
  private reviewIfthereAreButtons(text, type) {
    const clave = '*$MARCO$*:'
    let buttons;
    if (this.messages == undefined) { this.messages = [] }
    if (text.includes(clave) && type == 'received') {
      const stringify = text.substring(text.lastIndexOf(clave) + clave.length)
      buttons = this.createbuttons(stringify)
    }
    return buttons
  }

  public addMessage(from, text: string, type: 'received' | 'sent', tipo, file_mime) {
    let clave = '*$MARCO$*:';

    if (this.messages == undefined) this.messages = [];


    if (text != undefined && (text.includes(clave)) && type == 'received') {
      let stringify = text.substring(text.lastIndexOf(clave) + clave.length);
      let buttons = JSON.parse(stringify);
      let drawButtons = this.createbuttons(buttons.button);
      let div = document.createElement('div');
      text = text.substring(0, text.lastIndexOf(clave))
      div.textContent = text;
      console.log(buttons.button.length);
      (buttons.button.length > 0) ? div.appendChild(drawButtons) : '';
      text = div.innerHTML;
      this.messages.push({
        from,
        text,
        type,
        tipo,
        file_mime,
        date: new Date().getTime(),
      })
    } else {

      this.messages.push({
        from,
        text,
        type,
        tipo,
        file_mime,
        date: new Date().getTime(),
      })
    }

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


    this.trabajarMsg(fila);


    setTimeout(() => {
      try {
        this.scrollToBottom(this.widgetBody.nativeElement, 200);
      } catch (error) { }
    }, 800);
  }

  private trabajarMsg(msg: any) {
    this.msgList = this.encsessionService.descodif(GlobalService.NM_COOKIE);
    if (this.msgList == undefined) {
      this.msgList = []
    }
    else {
      let i = 0

      if (this.msgList.length > 110) {
        for (let index = 110; index < this.msgList.length; index++) {
          this.msgList.splice(i, 1)
          i++
        }
      }
    }
    this.msgList.push(msg)
    this.encsessionService.codif(this.msgList, GlobalService.NM_COOKIE);

  }

  private misDatos() {
    this.socketService.getMisDatos(this.client.id, this._token).subscribe(
      (data) => {
        if (!data.error) {
          this.client.name = data.data.username
          this.valido = true

          /*  setTimeout(() => {
              this.addMessage(this.operator, 'Hola, bienvenido de nuevo ' + this.client.name, 'received', 1, '')
            }, 1500)*/
          this.initIoConnection();


        } else {
          // console.log(data.mensaje)
        }
      },
      (error) => {
        console.log(error.status)
      },
      () => { },
    )
  }
  public scrollToBottom(element: HTMLElement, time: number) {
    if (this.banderaScroll == true) {
      this.banderaScroll = false
      try {
        let InicialY = element.scrollTop
        let velocity = (element.scrollHeight - element.scrollTop) / time
        for (let i = 0; i < time; i++) {
          setTimeout(() => {
            InicialY = InicialY + velocity
            element.scrollTo(0, InicialY)
          }, velocity)
        }
        this.banderaScroll = true;
      } catch (err) {
        console.log("error scroll")
        console.log(err.message)
      }
    } else {

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
        '<span><a href="https://api.whatsapp.com/send?phone=' +
        GlobalService.CONTACT_WAS +
        '" >   <img src="assets/wa.png"  >    </a> </span>', //+
      // '<span><a href="https://t.me/pau_cableonda_bot" >   <img src="assets/te.png"  >    </a> </span>',

      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
    })
  }
  public openChat() {
    this._visible = true //cambiado

  }
  public closeChat(event?) {
    if(event){
      this._visible = !this._visible
      return
    }
    
    this._visible = false //cambiado
  }
  public closeButom() {
    $('.chatbubble').removeClass('open')
    $('.bot_btclose').removeClass('open')

    $('#componetchat').hide()
  }
  public openButom() {
    $('.chatbubble').toggleClass('open')
    $('.bot_btclose').toggleClass('open')
    $('#componetchat').show()
  }
  selectComando = (comando) => {
    this.socketService.send(this.client, comando, this._token)
    this.addMessage(this.client, comando, 'sent', 1, '')
    this.ocultarTarjetas()
  }
  buttonMessageClick(message, enabled) {
    let msg = { value: message };
    if (enabled) {
      this.sendMessage(msg);
    }
  }
  public sendMessage(message) {

    if (message.value.trim() === '') {
      return
    }
    if (!this.valido) {
      this.client.name = message.value.trim()
      this.addMessage(this.client, message.value, 'sent', 1, '')
    } else {
      this.socketService.send(this.client, message.value, this._token)
      this.addMessage(this.client, message.value, 'sent', 1, '')
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
    this.socketService.initSocket()

    this.ioConnection = this.socketService
      .onMessage()
      .subscribe((respuesta: any) => {
        // this.operator.name=respuesta.usuario.name;
        //this.operator.avatar=respuesta.usuario.avatar;
        if (respuesta.message.search('deleteMensaje') != '-1') {
          this.messages = []
          // this.comprobarDatos()
        } else {
          if (respuesta.tipo == 1)
            this.addMessage(this.operator, respuesta.message, 'received', 1, '')
          else if (respuesta.tipo == 2) {
            let mime = respuesta.mime
            this.addMessage(this.operator, respuesta.file, 'received', 2, mime)
          }
        }
      })

    this.ioConnection = this.socketService
      .onError()
      .subscribe((respuesta: any) => {
        console.log('error')


        this.addMessage(this.operator, respuesta.message, 'received', 1, '')
      })

    this.socketService.onEvent(Event.CONNECT).subscribe(() => {
      this.socketService.adduser(this.client, this._token)
    })

    this.socketService.onEvent(Event.DISCONNECT).subscribe(() => {
      /* console.log('disconnected');
         setTimeout(() => {
           this.addMessage(this.operator, 'Desconectado', 'received', 1,'')
         }, 1500)*/
    })
  }
  public sendNotification(action: Action): void {
    let message: any

    if (action === Action.JOINED) {
      message = {
        nickname: this.client.name,
        action: action,
      }
      this.socketService.join(this.client.name, this._token)
    } else if (action === Action.RENAME) {
      message = {
        action: action,
        nickname: this.client.name,
        message: 'rename',
      }
      this.socketService.send(this.client.name, 'rename', this._token)
    }
  }
  goToLink(url: string) {
    // url = GlobalService.SERVER_ENDPOINT + url;
    window.open(url)
  }
  paserPdf(ruta: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(ruta)
  }
  ocultarTarjetas = () => {
    this.menuStatet = this.menuStatet === 'out' ? 'in' : 'out'
  }
  ocultarTarjetas2 = () => {
    this.menuStatet2 = this.menuStatet2 === 'out' ? 'in' : 'out'
  }
  paserLink(html: any): SafeHtml {
    var div = document.createElement('div')
    const clave = '*$MARCO$*:'
    if (html.includes(clave)) {
      html = html.substring(0, html.lastIndexOf(clave))
    }
    div.innerHTML = html
    // div.innerHTML  = this.sanitizer.sanitize(SecurityContext.HTML, html);
    div.childNodes.forEach((e: any) => {

      if (e.textContent.trim() !== '' && e.textContent.includes('www.')) {
        let a =
          this.linkifyService.linkify(e.textContent) ||
          this.linkifyService.linkify(e.innerText)
        let temporalNode = document.createElement('span')
        temporalNode.innerHTML = a
        e.replaceWith(temporalNode)
      }
    })
    return div.innerHTML
    // return html
  }
  esnuestro(texto): boolean {
    return texto.includes('url.pau.zone')
    // return texto.includes(':8100')
  }
  goToLink2(link) {
    this.nuestraUrl = link
    this.ocultarTarjetas2()
  }
  sendFile(stringInput) {
    const input = JSON.parse(stringInput)

    switch (input.kind) {
      case 'image':
        this.addMessage(this.operator, input.source, 'sent', 2, input.type)
        break
      case 'video':
        this.addMessage(this.operator, input.source, 'sent', 2, input.type)
        break
      default:
        break
    }

  }
  toggleAttOptions() {
    this.AdjuntosComponent.cargarAdjunto()
  }

  DOMLOADED(){
    document.addEventListener("DOMContentLoaded", function(event) {
      let elements = Array.from(document.querySelectorAll('.main-rotator'));
      let elementsToShow= [];
      elements.forEach(Element => {
        if(Element.getAttribute('data-chatweb') == 'true')elementsToShow.push(Element)
      })
      console.log(elementsToShow)
    });
  }
}
