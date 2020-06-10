import { Injectable } from '@angular/core';

@Injectable() 
export class GlobalService {
    
   //public static API_ENDPOINT='api-widget/';
    //public static  SOCKET_ENDPOINT = 'http://localhost:3000/'; 
    public static NM_COOKIE='__hisponaoochat__';
    public static TEXTO_CAB='Hispano';
    public static CONTACT_WAS='+50769331925';
   // public static CONTACT_TEL='@Hygeia112_bot';
   
    //public static AVATAR_CAB='/assets/bankblanco.png';
    //public static AVATAR_CHAT='assets/logoadiper.png'; //./assets/logochat_red.svg`

    
    public static AVATAR_CAB='/assets/logopau.png';
    public static AVATAR_CHAT= '/assets/logochat_red.svg';
    public static ICON_CANCEL= '/assets/cancel.png';
    //public static TXT_INICIAL='Hola, soy Eva de Adiper.  ¿Cómo puedo ayudarle?  Le agradecería que me facilite un nickname para dirigirme más fácilmente a usted.';
    public static TXT_INICIAL="Hello, I am Hispano, your virtual assistant. Write your name and let's get started";
    public static API_ENDPOINT='https://node1.smallshi.com/api-widget/';
    public static  SOCKET_ENDPOINT = 'https://node1.smallshi.com:1442/';
    //public static API_ENDPOINT='https://49544f13.ngrok.io/api-widget/';
    //public static  SOCKET_ENDPOINT = 'https://49544f13.ngrok.io/';
    
}   