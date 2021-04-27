import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private FB:FormBuilder) { }

  subscribeForm = this.FB.group({
    email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),

  })

  sendForm(){
    console.log(this.subscribeForm.value)
  }

  ngOnInit() {
  }

}
