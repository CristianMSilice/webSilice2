import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MailService } from 'src/app/web/Services/mail.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup;
  subscribeForm: FormGroup;
  constructor(private FB: FormBuilder, private mailService:MailService) { }

  ngOnInit() {
    this.createForms();

  }
  createForms() {
    this.contactForm = this.FB.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Asunto: new FormControl('', [Validators.required]),
      Mensaje: new FormControl('', [Validators.required])
    })
    this.subscribeForm = this.FB.group({
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),

    })

  }
  sendContactForm() {
    this.mailService.postMessage(this.contactForm.value).subscribe(res=>{
      console.log('mail service response')
      console.log(res)
    })
    console.log(this.contactForm.value)
  }

  sendSubscribeForm(){
    console.log(this.subscribeForm.value)
  }

}
