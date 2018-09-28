import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core'
import { Subject } from 'rxjs'
import { fadeIn, fadeInOut } from '../animations'
import { Inject } from '@angular/core';

import { SocketService } from '../shared/services/socket.service';
import { Action } from '../shared/model/action';
import { Event } from '../shared/model/event';
import { TOKEN } from '../shared/services/config';


const randomMessages = [
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'Is there anything else I can help you with?',
  'That\'s awesome',
  'Angular Elements is the bomb 💣 ',
  'Can you explain in more detail?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure to chat with you',
  'We are happy to make you a custom offer!',
  'Bye',
  ':)',
]

const rand = max => Math.floor(Math.random() * max)

const getRandomMessage = () => randomMessages[rand(randomMessages.length)]

@Component({
  selector: 'chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
  animations: [fadeInOut, fadeIn],
})
export class ChatWidgetComponent implements OnInit {
  //@ViewChild('bottom') bottom: ElementRef
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Input() public theme: 'blue' | 'grey' | 'red' = 'blue'

  valido: boolean = false;
  action = Action;


  messageContent: string;
  ioConnection: any;

  constructor(private socketService: SocketService, @Inject(TOKEN) public _token?: string) { }

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
    name: 'Multibank',
    status: 'online',
    avatar: `http://municipios360.com/descargas/icono-hojas3.png`,
  }

  public client = {
    id: 0,
    name: 'Guest User',
    status: 'online',
    avatar: `https://randomuser.me/api/portraits/men/${rand(100)}.jpg`,
  }

  public messages = []

  public addMessage(from, text, type: 'received' | 'sent', tipo) {
    this.messages.unshift({
      from,
      text,
      type,
      tipo,
      date: new Date().getTime(),
    })
    this.scrollToBottom()
  }

  public scrollToBottom() {
    /* if (this.bottom !== undefined) {
       this.bottom.nativeElement.scrollIntoView()
     }*/
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  public focusMessage() {
    this.focus.next(true)
  }

  public randomMessage() {
    this.addMessage(this.operator, getRandomMessage(), 'received', 1)
  }

  ngOnInit() {
    setTimeout(() => this.visible = false, 1000)
    setTimeout(() => {
      this.addMessage(this.operator, 'Hola, indica tu email para comenzar', 'received', 1)
    }, 1500)

  }

  public toggleChat() {
    this.visible = !this.visible
  }

  public sendMessage({ message }) {
    //Vemos si es un email
     

    if (message.trim() === '') {
      return
    }
    if (!this.valido) {
      let evalido = message.trim().includes("@")
      if (evalido) {

        this.client.name = message.trim();
        this.addMessage(this.client, message, 'sent', 1)


        this.socketService.getLogin2(this.client.name, this._token).subscribe(
          data => {

            if (!data.error)
            {
              this.client.id = data.data.id;
              this.initIoConnection();
              this.socketService.adduser(this.client.id);
              this.sendNotification(Action.JOINED);
              let texto = "Bienvenido " + this.client.name
  
              this.addMessage(this.operator, texto, 'received', 1)
              this.valido = true;
            }else
            {
              console.log(data.mensaje)
            }
           
          },
          error => {
            console.log(error.status)
            //if ()


          },
          () => { }
        );

        //conectamos con el socket


      }
    }
    else {



      this.socketService.send(this.client, message,this._token);


      this.addMessage(this.client, message, 'sent', 1)

    }




  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === '/') {
      this.focusMessage()
    }
    if (event.key === '?' && !this._visible) {
      this.toggleChat()
    }
  }


  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((respuesta: any) => {
        // this.operator.name=respuesta.usuario.name;
        //this.operator.avatar=respuesta.usuario.avatar;

        if (respuesta.tipo == 1)
          this.addMessage(this.operator, respuesta.message, 'received', 1)
        else if (respuesta.tipo == 2) {

          let mime = respuesta.mime;
          this.addMessage(this.operator, respuesta.file, 'received', 2)
        }

      });

    this.ioConnection = this.socketService.onError()
      .subscribe((respuesta: any) => {
        console.log("error")


        this.addMessage(this.operator, respuesta.message, 'received', 1)


      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
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
      this.socketService.send(this.client.name, 'rename',this._token);
    }


  }

}
