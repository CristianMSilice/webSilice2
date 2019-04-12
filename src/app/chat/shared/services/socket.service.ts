import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Message } from '../model/message';
import { Event } from '../model/event';
import { Http, Response, } from '@angular/http';
import { GlobalService } from '../../shared/globals';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';



import * as socketIo from 'socket.io-client'; 
 
   
const    SERVER_URL = GlobalService.SOCKET_ENDPOINT;
const    SERVER_URL2 = GlobalService.API_ENDPOINT;
 /*
  
const SERVER_URL = 'http://localhost:3000';
const SERVER_URL2 = '/api/login/';
 */
@Injectable()
export class SocketService {
    private socket;
    constructor(private http: HttpClient ) { }

    getLogin2(user: String,token:String): Observable<any> {
        let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
     
        });
        let options = {
          headers: httpHeaders
        };
        const ntarjeta = ({
          "username": user,
          "token":token
    
        });
        return this.http.post<any>(SERVER_URL2+'newUser/', ntarjeta, options);
    }
  
    public initSocket(): void {
        var coption={
            "transports":["websocket"]
        }
        this.socket = socketIo(SERVER_URL);
    }

    public send(user:any,message: String,token:String): void {
        this.socket.emit('messagedetection',user, message,token);
    }


    public join(nombre: string,token:String ): void {
        console.log("join "+ nombre+ " "+token)
        this.socket.emit('join', nombre,token);
    }

    public adduser(id:number): void {
        this.socket.emit('add-user', id);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
          
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onError(): Observable<Message> {
        return new Observable<Message>(observer => {
          
            this.socket.on('error', (data: Message) => observer.next(data));
        });
    }


    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
