import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss']
})
export class ChatFooterComponent implements OnInit {
  showContent: boolean = false;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  active = 0;
  toggleChatFooter() {
    this.showContent = !this.showContent
  }
  videos= [
  '8KHklcgn0xg','Jegv-Ht2Qeo','LQYyau47oy4','TAWXA-ccj7I','wzraTerfxLI','tJSu7nrf8AM'
  ]

  activeChatSetting(event:MouseEvent,active) {
    (this.active == active)
      ? this.active = 0
      : this.active = active;
  }
  youtubevideo(video){
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video}`)
  }
}
