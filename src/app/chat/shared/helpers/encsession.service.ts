import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { SessionStorageService } from 'ngx-webstorage';
 
 
  
@Injectable()
export class EncsessionService { 
  
    
  
  
  constructor( private mySession:SessionStorageService) { }

  codif(datos: any,nombre:string) {
    var ciphertext  = CryptoJS.AES.encrypt(JSON.stringify(datos), '2u5/pZL7YJr%4Z$!');
    this.mySession.store(nombre,ciphertext.toString()); 
  } 

 

  remove(datos: any) {
  
    this.mySession.clear();
  } 


  descodif(datos: any) {
    if(this.mySession.retrieve(datos)!=null){
      var bytes  = CryptoJS.AES.decrypt(this.mySession.retrieve(datos), '2u5/pZL7YJr%4Z$!');
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return  decryptedData;
    }
  } 
  dameToken(datos: any) {
    if(this.mySession.retrieve(datos)!=null){
      var bytes  = CryptoJS.AES.decrypt(this.mySession.retrieve(datos), '2u5/pZL7YJr%4Z$!');
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return  decryptedData.token;
    }
  } 
  
 
}
