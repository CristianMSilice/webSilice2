import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  // private apiUrl = "http://81.169.142.158/smallshi-desarrollo/apirest/index.php/"
  private apiUrl = "http://api-siliceweb.smallshi.com/index.php/"
  headers :HttpHeaders= new HttpHeaders();
  constructor(private http: HttpClient) { 
    this.headers.append("Content-Type","application/x-www-form-urlencoded");
    this.headers.append("Authorization","Basic c2lsaWNlcG9zOm1ZUFJ2dVAw");
    // this.headers.append("Access-Control-Allow-Origin","*");
  }

  postMessage(data: any) {
    console.log(data)
    return this.http.post(`${this.apiUrl}EnviarCorreo/sendEmail`, data, {headers:this.headers })
  }
}
