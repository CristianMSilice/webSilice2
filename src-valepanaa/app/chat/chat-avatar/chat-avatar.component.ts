import { Component, Input } from '@angular/core'

@Component({
  selector: 'chat-avatar',
  template: `
    <img [attr.src]="image" class="avatar" />
  `,
  styles: [`
    .avatar {
      height: 23px;
      width: 23px;
      border-radius: 50%;
      float: left;
      margin-right: 10px;
    }
  `]
})
export class ChatAvatarComponent {
  @Input() public image: string
}
