import { Injectable } from '@angular/core';

@Injectable() 
export class GlobalService {
    
   //public static API_ENDPOINT='api-widget/';
    //public static  SOCKET_ENDPOINT = 'http://localhost:3000/'; 
    public static NM_COOKIE='__sexpe__';
    public static TEXTO_CAB='Extremadura Trabaja';
    public static CONTACT_WAS='+34628653025';
   // public static CONTACT_TEL='@Hygeia112_bot';
   
    //public static AVATAR_CAB='/assets/bankblanco.png';
    //public static AVATAR_CHAT='assets/logoadiper.png'; //./assets/logochat_red.svg`

    
    public static AVATAR_CAB='/assets/logopau.png';
    public static AVATAR_CHAT= '/assets/logochat_red.svg';
    public static ICON_CANCEL= '/assets/cancel.png';
    //public static TXT_INICIAL='Hola, soy Eva de Adiper.  ¿Cómo puedo ayudarle?  Le agradecería que me facilite un nickname para dirigirme más fácilmente a usted.';
    public static TXT_INICIAL="Un gusto saludarle, hablar conmigo es muy sencillo, escriba Hola y siga mis instrucciones. Es muy fácil !"; 
    public static API_ENDPOINT='https://node1.smallshi.com/api-widget/';
    public static  SOCKET_ENDPOINT = 'https://node1.smallshi.com:1442/';
    //public static API_ENDPOINT='https://49544f13.ngrok.io/api-widget/';
    //public static  SOCKET_ENDPOINT = 'https://49544f13.ngrok.io/';
    
}   