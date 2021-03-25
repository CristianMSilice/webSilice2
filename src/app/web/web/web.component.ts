import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
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
    if(this.router.url !== '/home' && this.router.url !== '/home/home')return
    this.isHome=true;
  }

}
