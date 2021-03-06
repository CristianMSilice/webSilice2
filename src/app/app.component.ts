import { Component } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from './../environments/environment';

declare var gtag;

@Component({
  selector: 'app-root',
  template: `
  <particles [params]="myParams" [style]="myStyle" [width]="width" [height]="height"></particles>
    <router-outlet></router-outlet>
    <chat-widget [theme]="theme"></chat-widget>
     
  `,
})
export class AppComponent  {

  
  public theme = 'red'
  public YT: any;
  width: number = 100;
  height: number = 100;
  myStyle: Object = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': 0,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams: object = {
    "particles": {
      "number": {
        "value": 48,
        "density": {
          "enable": true,
          "value_area": 1763.753266952075
        }
      },
      "color": {
        "value": "#ff6c2b"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ff6c2b"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 240.5118091298284,
        "color": "#ff6c2b",
        "opacity": 0.4008530152163807,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  constructor(
    private titleService: Title,
    private meta :Meta,
    private router: Router,
    
  ){
    if(window.innerWidth<769)location.replace(environment.mobileURL);

    const navEndEvents$ = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-CQ99S4W8JV', {
        'page_path': event.urlAfterRedirects
      })
    })

    this.loadYT_API()
  }

 

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  


  loadYT_API() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.setAttribute("defer", "defer");
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  }
}
