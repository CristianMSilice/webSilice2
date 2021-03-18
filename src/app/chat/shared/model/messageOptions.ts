export interface messageOptions{
    button?: Array<buttonOption>;
    menuPrincipal?:Array<menuPrincipalOption>;
    superMensaje?:superMensajeOpption;
    hidden?:boolean;
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