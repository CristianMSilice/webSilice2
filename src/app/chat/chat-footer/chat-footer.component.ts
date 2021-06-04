import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['../chat-widget/message.scss','./chat-footer.component.scss']
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
  links= [
    {text:'Linkedin', url:'https://www.linkedin.com/company/si-silice', texturl:'www.linkedin.com/silice', image:'Slinkedin.webp'},
    {text:'Facebook', url:'https://www.facebook.com/sisilice/', texturl:'www.facebook.com/silice', image:'Sfacebook.webp'},
    {text:'Instagram', url:'https://www.instagram.com/silicesi/', texturl:'www.instagram.com/Siice', image:'Sinstagram.webp'},
    {text:'Twitter', url:'https://twitter.com/Si_Silice', texturl:'www.twitter.com/Si_Silice', image:'Stwitter.webp'},
    {text:'Youtube', url:'https://www.youtube.com/channel/UCI-ZhoL4V3uZorOJZD849dg', texturl:'www.youtube.com/Siice', image:'Syoutube.webp'},
  ]
  sedes=[
    {image:'assets/images/sedes/flag2-españa.webp', link:'nosotros/sedes/espana', name:'España', city:'Extremadura'},
    {image:'assets/images/sedes/flag2-colombia.webp', link:'nosotros/sedes/colombia', name:'Colombia', city:'Bogotá'},
    {image:'assets/images/sedes/flag2-panama.webp', link:'nosotros/sedes/panama', name:'Panamá', city:'Ciudad de Panamá'}
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
