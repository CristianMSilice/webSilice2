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
      nombre: new FormControl('', [Validators.required]),
      email_contacto: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      asunto: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required])
    })
    this.subscribeForm = this.FB.group({
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),

    })

  }
  sendContactForm() {
    if(this.contactForm.invalid) return
    let formulario = this.contactForm.value;
    formulario.email_destino = "marketing@silice.si"
    this.mailService.postMessage(formulario).subscribe(res=>{
      console.log(res)
    })
  }

  sendSubscribeForm(){
    console.log(this.subscribeForm.value)
  }

}
