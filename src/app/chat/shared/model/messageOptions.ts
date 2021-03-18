export interface messageCookieService{
        from:string;
        text:string;
        type:string;
        tipo:string;
        file_mime:string;
        date: number;
        options: messageOptions
}

export interface messageOptions{
    button?: Array<buttonOption>;
    menuPrincipal?:Array<menuPrincipalOption>;
    superMensaje?:superMensajeOpption;
    show?:boolean;
}

interface buttonOption{
    Color: String;
    texto: String;
    accion: String;
}
interface menuPrincipalOption{
    texto: String;
    accion: String;
}

interface superMensajeOpption{
    titulo: String;
    mensaje: String;
    Image: String;
}