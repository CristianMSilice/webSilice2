import { Injectable } from '@angular/core';

@Injectable() 
export class GlobalService {
    
   //public static API_ENDPOINT='api-widget/';
    //public static  SOCKET_ENDPOINT = 'http://localhost:3000/'; 
    public static NM_COOKIE='__multib_chat__';
    public static TEXTO_CAB='Asistente Virtual';
    public static AVATAR_CAB='assets/bankblanco.png';
    public static AVATAR_CHAT='assets/logobanco.png'; //./assets/logochat_red.svg`
 
    public static API_ENDPOINT='https://node1.smallshi.com/api-widget/';
    public static  SOCKET_ENDPOINT = 'https://node1.smallshi.com:1442/';
    
} 