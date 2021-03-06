import {
  Component,
  ElementRef,
  HostListener, Inject, Input,


  NgZone, OnInit, SecurityContext, ViewChild
} from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { NgxLinkifyjsService } from 'ngx-linkifyjs'
import { Subject } from 'rxjs'
import swal from 'sweetalert2'
import { fadeIn, fadeInOut } from '../animations'
import { ChatAdjuntosComponent } from '../chat-adjuntos/chat-adjuntos.component'
import { GlobalService } from '../shared/globals'
import { EncsessionService } from '../shared/helpers/encsession.service'
import { Action } from '../shared/model/action'
import { Event } from '../shared/model/event'
import { messageCookieService } from "../shared/model/messageOptions"
import { TOKEN } from '../shared/services/config'
import { SiblingService } from '../shared/services/sibling.service'
import { SocketService } from '../shared/services/socket.service'
import { SlideInOutAnimation } from './animations'


@Component({
  selector: 'chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: [
    './header.scss',
    './message.scss',
    './chat-widget.component.scss'],
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

  msgList: Array<messageCookieService> = [];
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
  // pp: string = ' <p>Hola, bienvenido de nuevo asdf</p> ';
  filetosend: HTMLInputElement;
  menuPrincipal = { options: [{ texto: '', accion: '' }], enabled: false }
  innerWidth: number




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
  public messages: Array<messageCookieService> = []


  constructor(
    private socketService: SocketService,
    private sanitizer: DomSanitizer,
    public linkifyService: NgxLinkifyjsService,
    private encsessionService: EncsessionService,
    private cookieService: CookieService,
    private zone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private SiblingService: SiblingService,
    @Inject(TOKEN) public _token?: string) {
      
    window['angularComponentReference'] = {
      zone: this.zone,
      componentFn: (value) => this.comunicationWebWidget(value),
      component: this,
    };
    this.subscribeToSendUrlToPau();
    this.subscribeToSendClickToPau();
  }

  subscribeToSendUrlToPau() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let route = this.router.url.replace(/\//g,"-");
        this.comunicationWebWidget(`url: ${route}`);
      }
    })
  }

  subscribeToSendClickToPau(){
    this.SiblingService.sendClick$.subscribe((text)=>{
      console.log(text)
      this.comunicationWebWidget(text);
    })
  }

  public comunicationWebWidget(message) {
    if (message.trim() === '') return
    if (!this.valido) {
      this.addMessage(this.client, message, 'sent', 1, '', false)
    } else {
      this.socketService.send(this.client, message, this._token)
      this.addMessage(this.client, message, 'sent', 1, '', false)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) { this.calcResize() }

  ngOnInit() {
    this.calcResize();
    this.comprobarDatos()
  }

  calcResize() {
    this.isMobileResolution = window.innerWidth <= 768;

    this.close_able_chat = (this.isMobileResolution)
      ? true
      : GlobalService.CLOSE_ABLE_CHAT;
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

  public addMessage(from, text: string, type: 'received' | 'sent', tipo, file_mime, show?) {
    if (show == undefined) show = true;
    let clave = '*$MARCO$*:';
    let options

    if (text != undefined && (text.includes(clave)) && type == 'received') {
      let stringify = text.substring(text.lastIndexOf(clave) + clave.length);
      options = JSON.parse(stringify);
      text = text.substring(0, text.lastIndexOf(clave))
    }
    let redirect = false

    if (options == undefined) options = {};
    if (options.redirect) {
      redirect = options.redirect;
      options.redirect = undefined
    }
    options['show'] = show;
    if (this.messages == undefined) this.messages = []
    this.messages.push({
      from,
      text,
      type,
      tipo,
      file_mime,
      date: new Date().getTime(),
      options: options
    });

    let fila: messageCookieService = {
      from: from,
      text: text,
      type: type,
      tipo: tipo,
      file_mime: file_mime,
      date: new Date().getTime(),
      options: options
    }

    this.trabajarMsg(fila);

    setTimeout(() => {
      try {
        this.scrollToBottom(this.widgetBody.nativeElement, 200);
      } catch (error) { }
    }, 800);

    if (redirect) this.router.navigate([redirect], { relativeTo: this.route });
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
    if (event) {
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
  buttonMessageClick(message, enabled, hidden) {
    let msg = { value: message };
    if (enabled) {
      this.sendMessage(msg, hidden == "true")
    }
  }
  public sendMessage(message, respHidden?) {
    if (message.value.trim() === '') {
      return
    }
    if (!this.valido) {
      this.client.name = message.value.trim();
      (respHidden == true)
        ? this.addMessage(this.client, message.value, 'sent', 1, '', false)
        : this.addMessage(this.client, message.value, 'sent', 1, '');
    } else {
      this.socketService.send(this.client, message.value, this._token);
      (respHidden == true)
        ? this.addMessage(this.client, message.value, 'sent', 1, '', false)
        : this.addMessage(this.client, message.value, 'sent', 1, '');
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
    // var div = document.createElement('div')
    // const clave = '*$MARCO$*:'
    // if (html.includes(clave)) {
    //   html = html.substring(0, html.lastIndexOf(clave))
    // }
    // div.innerHTML = html
    // // div.innerHTML  = this.sanitizer.sanitize(SecurityContext.HTML, html);
    // div.childNodes.forEach((e: any) => {

    //   if (e.textContent.trim() !== '' && e.textContent.includes('www.')) {
    //     let a =
    //       this.linkifyService.linkify(e.textContent) ||
    //       this.linkifyService.linkify(e.innerText)
    //     let temporalNode = document.createElement('span')
    //     temporalNode.innerHTML = a
    //     e.replaceWith(temporalNode)
    //   }
    // })
    // return div.innerHTML
    // // return html

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

}
