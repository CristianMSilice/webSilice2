import { Component, Input, OnInit } from '@angular/core';
import { SiblingsService } from '../../Services/siblings.service';

@Component({
  selector: 'you-tube-video',
  templateUrl: './you-tube-video.component.html',
  styleUrls: ['./you-tube-video.component.scss']
})
export class YouTubeVideoComponent implements OnInit {
  @Input() video: String;
  public player: any;
  public reframed: Boolean = false;
  public videoEvent = undefined;
  size = {width:window.innerWidth*0.9 ,height:window.innerHeight*0.9}
  constructor(private siblingsService: SiblingsService) { }

  ngOnInit() {
    window['onYouTubeIframeAPIReady'] = () => this.initVideo();
    this.reviewIfStartVideo();
    
  }
  reviewIfStartVideo() {
    this.siblingsService.showModal$.subscribe(show => {
      (show && this.videoEvent)
        ?this.videoEvent.target.playVideo()
        :this.videoEvent.target.pauseVideo();  
    })
  }
  initVideo() {
    this.reframed = false;
    window['YT'].ready(() => {
      console.log(this);
      this.player = new window['YT'].Player(this.video, {
        videoId: this.video,
        height: this.size.height,
        width: this.size.width,
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          controls: 1,
          disablekb: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          playsinline: 1
        },
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': this.onPlayerReady.bind(this),
        }
      });
    })
  }

  onPlayerReady(event) { 
    this.videoEvent = event;
  }
  onPlayerStateChange() {
    console.log('OnStateChange')
  }
  onPlayerError() {
    console.log('onPlayerError')
  }

}
