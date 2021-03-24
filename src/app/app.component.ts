import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <chat-widget [theme]="theme"></chat-widget>
     
  `,
})
export class AppComponent {
  public theme = 'red'
}
