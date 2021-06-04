import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'desktop-web',
  templateUrl: './desktop-web.component.html',
  styleUrls: ['./desktop-web.component.scss']
})
export class DesktopWebComponent implements OnInit {

  isHome: boolean;
  constructor(private router: Router) { 
  } 
  
  ngOnInit() {
      this.changeClassIfHome();
      this.subscribechangeClassIfHome();
  }

  subscribechangeClassIfHome(){this.router.events.subscribe(()=> this.changeClassIfHome())}

  changeClassIfHome(){
    this.isHome=false;
    if(this.router.url !== '/home' && this.router.url !== '/home')return
    this.isHome=true;
  }

}
