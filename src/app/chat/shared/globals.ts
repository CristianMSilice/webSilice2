import { Injectable } from '@angular/core';

@Injectable() 
export class GlobalService {
    
   //public static API_ENDPOINT='api-widget/';
    //public static  SOCKET_ENDPOINT = 'http://localhost:3000/'; 
    public static NM_COOKIE='__multib_chat__';
    public static TEXTO_CAB='Eva. Multibank';
    public static AVATAR_CAB='/assets/bankblanco.png';
    //public static AVATAR_CHAT='assets/logoadiper.png'; //./assets/logochat_red.svg`

    //public static AVATAR_CAB='assets/logopau.png';
    public static AVATAR_CHAT= '/assets/logochat_red.svg';
    public static ICON_CANCEL= '/assets/cancelsil.png';
    //public static TXT_INICIAL='Hola, soy Eva de Adiper.  ¿Cómo puedo ayudarle?  Le agradecería que me facilite un nickname para dirigirme más fácilmente a usted.';
    public static TXT_INICIAL='Hola, bienvenido a tu asistente virtual, indica a continuación un nickname para  dirigirnos a usted.';
    public static API_ENDPOINT='https://node1.smallshi.com/api-widget/';
    public static  SOCKET_ENDPOINT = 'https://node1.smallshi.com:1442/';
    
}  