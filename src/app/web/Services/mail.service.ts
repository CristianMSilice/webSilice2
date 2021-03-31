import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = "https://mailthis.to/cristian.motta@silice.si"
  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.apiUrl, input, { responseType: 'text' })
  }
}
