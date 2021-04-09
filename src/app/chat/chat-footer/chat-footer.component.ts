import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss']
})
export class ChatFooterComponent implements OnInit {
  showContent: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleChatFooter() {
    this.showContent =!this.showContent
  }

  activeChatSetting(active) {
    console.log(active)
  }
}
