import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/web/services/mail.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup;
  subscribeForm: FormGroup;
  alert: boolean = false;
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


  }
  sendContactForm() {
    if(this.contactForm.invalid) return
    let formulario = this.contactForm.value;
    formulario.email_destino = "marketing@silice.si"
    this.mailService.postMessage(formulario).subscribe(res=>{
      console.log(res)
    })
    this.alert = true;
    this.contactForm.reset({})
  }

  sendSubscribeForm(){
    console.log(this.subscribeForm.value)
  }

  closeAlert() {
    this.alert = false;
  }

}