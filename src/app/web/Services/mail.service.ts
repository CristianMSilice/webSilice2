import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = "http://81.169.142.158/smallshi-desarrollo/apirest/index.php/"
  headers :HttpHeaders= new HttpHeaders();
  constructor(private http: HttpClient) { 
    this.headers.append("Content-Type","application/x-www-form-urlencoded");
    this.headers.append("Authorization","Basic c2lsaWNlcG9zOm1ZUFJ2dVAw");
  }

  postMessage(data: any) {
    console.log(data)
    return this.http.post(`${this.apiUrl}EnviarCorreo/sendEmail`, data, {headers:this.headers })
  }
}
