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

  @ViewChild('widgetBody', { static: false }) widgetBody: ElementRef
  @ViewChild(ChatAdjuntosComponent, { static: false }) AdjuntosComponent: ChatAdjuntosComponent
  @Input() public theme: 'blueno' | 'greyno' | 'redno' = 'blueno'
  supportEmojis
  valido = false
  nuestraUrl = ''
  action = Action
  banderaScroll = true

  msgList: any[] = []
  messageContent: string
  ioConnection: any
  menuStatet = 'out'
  menuStatet2 = 'out'
  cookieValue: string
  avatar_cab: string = GlobalService.AVATAR_CAB
  icon_cancel: string = GlobalService.ICON_CANCEL
  texto_cab: string = GlobalService.TEXTO_CAB
  isMobileResolution: boolean
  pp = ' <p>Hola, bienvenido de nuevo asdf</p> '
  filetosend: HTMLInputElement
  menuPrincipal = { options: [{ texto: '', accion: '' }], enabled: false }
  constructor(
    private socketService: SocketService,
    private sanitizer: DomSanitizer,
    public linkifyService: NgxLinkifyjsService,
    private encsessionService: EncsessionService,
    private cookieService: CookieService,
    @Inject(TOKEN) public _token?: string) {

  }
  public _visible = false
  public get visible() {
    return this._visible
  }
  @Input() public set visible(visible) {
    this._visible = visible
    if (this._visible) {
      setTimeout(() => {
        this.scrollToBottom(this.widgetBody.nativeElement, 200)
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

  createbuttons(buttons) {
    const div = document.createElement('div')
    div.classList.add('message-buttons-array')
    buttons.forEach(button => {
      const div1 = document.createElement('div')
      div1.classList.add('message-button-option')
      div1.textContent = button.texto
      div1.style.borderColor = button.color
      div1.style.color = button.color
      div1.setAttribute('action', button.accion)
      div1.setAttribute('state', 'enabled')
      div.appendChild(div1)
    })

    return div
  }

  reviewOptions(event) {
    const button: Element = event.target
    const state = button.getAttribute('state')
    const message = {
      value: button.getAttribute('action')
    }
    if (state == 'enabled') {
      button.parentElement.childNodes.forEach((optionBtn: Element) => {
        optionBtn.classList.add('disabled')
        optionBtn.setAttribute('state', 'disabled')
      })
      button.classList.add('selectable')
      this.sendMessage(message)
    }
  }

  public addMessage(from, text: string, type: 'received' | 'sent', tipo, file_mime) {
    const clave = '*$MARCO$*:'
    if (this.messages == undefined) {this.messages = []}
    if (text.includes(clave) && type == 'received') {
      const stringify = text.substring(text.lastIndexOf(clave) + clave.length)
      const div = document.createElement('div')
      text = text.substring(0, text.lastIndexOf(clave))
      div.textContent = text
      let buttons
      let drawButtons
      try {
        buttons = JSON.parse(stringify)
        drawButtons = this.createbuttons(buttons.button)
        console.log(buttons)
        // if ( buttons.button.length > 0) {div.appendChild(drawButtons)}
        buttons = buttons.button;
        if (buttons.hasOwnProperty('menuPrincipal')) {
          this.menuPrincipal.options = buttons.menuPrincipal
          this.menuPrincipal.enabled = true
        }
      } catch (error) {
        console.log('occurrió un error al convertir el JSON')
        console.log(stringify)
        console.log('este es el error que salió')
        console.log(error)
      }

      const premessage = {
        from,
        text,
        type,
        tipo,
        file_mime,
        date: new Date().getTime(),
      }
      if ( buttons ) { premessage['buttons'] = buttons}
      // text = div.innerHTML
      this.messages.push(premessage)
    } else {
      console.log(this.messages)
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


    this.trabajarMsg(fila)


    setTimeout(() => {
      try {
        this.scrollToBottom(this.widgetBody.nativeElement, 200)
      } catch (error) { }
    }, 800)
  }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true
    } else {
      this.isMobileResolution = false
    }

    setTimeout(() => (this.visible = false), 1000)
    if (!this.isMobileResolution) {
      this.comprobarDatos()
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
      console.log("primera vez sin cookies")
      this.encsessionService.remove
      this.encsessionService.codif(this.msgList, GlobalService.NM_COOKIE)
      this.login()
    }
    else {
      // SI exite la cokkie

      try {
        this.msgList = this.encsessionService.descodif(GlobalService.NM_COOKIE);
        this.cookieValue = this.cookieService.get(GlobalService.NM_COOKIE);

        this.client.id = this.cookieValue;
        this.misDatos()
        this.messages = this.msgList


        setTimeout(() => {

          this.visible = true
          setTimeout(() => {
            this.scrollToBottom(this.widgetBody.nativeElement, 200)
            this.focusMessage()
          }, 0)
        }, 1500)
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
          this.initIoConnection()
          console.log('almacenos la cookei')
          // let texto = "Bienvenido " + this.client.name
          // this.addMessage(this.operator, texto, 'received', 1,'')

          this.socketService.send(this.client, '/start', this._token)
          this.valido = true
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
    this.visible = true

  }

  public closeChat() {
    this.visible = false
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
  closeAdjuntos() {
  }
}
