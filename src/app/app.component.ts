import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <web></web>
    <chat-widget [theme]="theme"></chat-widget>
     
  `,
})
export class AppComponent {
  public theme = 'red'
}
