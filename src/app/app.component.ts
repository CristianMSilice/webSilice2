import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  
    <router-outlet></router-outlet>
    <chat-widget [theme]="theme"></chat-widget>
     
  `,
})
export class AppComponent implements OnInit {
  public theme = 'red'
  public YT: any;

  ngOnInit() {
    this.loadYT_API()
  }

  loadYT_API() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  }


}
