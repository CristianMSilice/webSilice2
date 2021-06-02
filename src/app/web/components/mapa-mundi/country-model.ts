export interface countryModel{
    name:string;
    svgName:string;
    photo:string;
    proyects:Array<proyect>
    choords: {left:any , top:any}
    date:string;
}
interface proyect {
    name:string;
    resume:string;
    date:string;
    type?:string;
}