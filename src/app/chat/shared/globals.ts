import { Injectable } from '@angular/core'

@Injectable()
export class GlobalService {
    
   //public static API_ENDPOINT='api-widget/';
    //public static  SOCKET_ENDPOINT = 'http://localhost:3000/'; 
    public static NM_COOKIE='__multibank_chat__';
    public static TEXTO_CAB='PAU';
    public static CONTACT_WAS='+50764940686';
   // public static CONTACT_TEL='@Hygeia112_bot';
   
    //public static AVATAR_CAB='/assets/bankblanco.png';

    
    public static AVATAR_CAB='./assets/logobanco.png';
    public static ICON_PDF='./assets/pdfIcon.svg';
    public static ICON_SEND='./assets/sendIcon.svg';
    public static ICON_ATTAC='./assets/attachedIcon.svg';
    public static ICON_EMOJI='./assets/emojiIcon.svg';
    public static AVATAR_CHAT= './assets/logochat_red.svg';
    public static ICON_CANCEL= './assets/cancel.png';
    
    //public static TXT_INICIAL='Hola, soy Eva de Adiper.  ¿Cómo puedo ayudarle?  Le agradecería que me facilite un nickname para dirigirme más fácilmente a usted.';
    public static TXT_INICIAL=`Hola 🤩Soy Silice, antes de que empecemos a hablar, dime cuál es tu nombre.`;
    // *$MARCO$*:{
    //   "button":[
    //     {"color":"#3366cc","texto":"accion","accion":"primera"}
    //   ],
    //   "menuPrincipal":[
    //     {"texto":"conoce a Alfredito","accion":"Alfredito"},
    //     {"texto":"Iniciemos una conversacion","accion":"nueva conversacion"}
    //   ],
    //   "superMensaje":{
    //     "titulo":"Prueba",
    //     "mensaje":"Prueba",
    //     "Image":"https://silice.si/temp/business/templatesBusiness_1_cajaAhorrosTarjetaMetrocopia8.png"
    //   },
    //   "actions":[
    //     {
    //       "image":"https://as.com/deporteyvida/imagenes/2018/02/28/portada/1519830649_122505_1519830777_noticia_normal.jpg",
    //       "href":"/laboratorio",
    //       "target": "_self"
    //     }
    //   ]
    // }
    // `; 
     public static API_ENDPOINT='https://node1.smallshi.com/api-widget/';
     public static  SOCKET_ENDPOINT = 'https://node1.smallshi.com:1442/';
    //public static API_ENDPOINT='http://localhost:3000/api-widget/';
     //public static  SOCKET_ENDPOINT = 'http://localhost:3000';
// public static API_ENDPOINT='https://api-wiget-demo.smallshi.com/api-widget/';
     
  //  public static  SOCKET_ENDPOINT = 'https://api-wiget-demo.smallshi.com:1442';

  public static CLOSE_ABLE_CHAT =false
    
}   
