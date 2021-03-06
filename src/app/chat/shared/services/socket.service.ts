import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import * as socketIo from 'socket.io-client'
import { GlobalService } from '../../shared/globals'
import { Event } from '../model/event'
import { Message } from '../model/message'


const SERVER_URL = GlobalService.SOCKET_ENDPOINT
const SERVER_URL2 = GlobalService.API_ENDPOINT
/*
 
const SERVER_URL = 'http://localhost:3000';
const SERVER_URL2 = '/api/login/';
*/
@Injectable()
export class SocketService {
  private socket
  constructor(private http: HttpClient) {}

  getLogin2(user: String, token: String): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    let options = {
      headers: httpHeaders,
    }
    const ntarjeta = {
      username: user,
      token: token,
    }
    return this.http.post<any>(SERVER_URL2 + 'newUser/', ntarjeta, options)
  }

  getMisDatos(udid: string, token: string): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': token,
    })
    let options = {
      headers: httpHeaders,
    }

    return this.http.get<any>(SERVER_URL2 + 'getDatosChat/' + udid, options)
  }

  public initSocket(): void {
    var coption = {
      transports: ['websocket'],
    }
    this.socket = socketIo(SERVER_URL)
  }

  public send(user: any, message: String, token: String): void {
    this.socket.emit('messagedetection', user, message, token)
  }

  public join(nombre: string, token: String): void {
    console.log('join ' + nombre + ' ' + token)
    this.socket.emit('join', nombre, token)
  }

  public adduser(usuario: any, token: string): void {
    this.socket.emit('add-user', usuario, token)
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>((observer) => {
      this.socket.on('message', (data: Message) => observer.next(data))
    })
  }

  public onError(): Observable<Message> {
    return new Observable<Message>((observer) => {
      this.socket.on('error', (data: Message) => observer.next(data))
    })
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>((observer) => {
      this.socket.on(event, () => observer.next())
    })
  }
  public sendFile(file){
    this.socket.emit(`enviarArchivo`, file)
  }
}
