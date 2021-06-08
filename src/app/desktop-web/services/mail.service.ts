import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = "http://servicios.silice.si"
  // headers :HttpHeaders= new HttpHeaders();
  constructor(private http: HttpClient) { 
    // this.headers.append("Content-Type","application/x-www-form-urlencoded");
    // this.headers.append("Authorization","Basic c2lsaWNlcG9zOm1ZUFJ2dVAw");
  }

  postMessage(data: any) {
    data = this.jsonToFormUrlEncoded(data)
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic c2lsaWNlcG9zOm1ZUFJ2dVAw`)
        .set(`Content-Type`,`application/x-www-form-urlencoded`)
    }
    return this.http.post(`${this.apiUrl}EnviarCorreo/sendEmail`, data, header)
  }


  jsonToFormUrlEncoded(obj){
    var str = [];
    for (var key in obj) {
         if (obj.hasOwnProperty(key)) {
               str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))                  
               console.log(key + " -> " + obj[key]);
         }
    }
    return str.join("&");
  }
}