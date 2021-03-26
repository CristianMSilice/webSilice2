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
    superMensaje?:superMensajeOption;
    show?:boolean;
    actions?:Array<buttonToRedirect>;
    redirect:String;
}

interface buttonOption{
    Color: String;
    texto: String;
    accion: String;
    hidden?:"true";
}
interface menuPrincipalOption{
    texto: String;
    accion: String;
}

interface superMensajeOption{
    titulo: String;
    mensaje: String;
    Image: String;
}

interface buttonToRedirect{
    image: string;
    href: string;
    target:"_blank"|"_self";
}