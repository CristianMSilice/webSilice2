import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <web class="web-view"></web>
    <chat-widget [theme]="theme"></chat-widget>
     
  `,
})
export class AppComponent {
  public theme = 'red'
}
