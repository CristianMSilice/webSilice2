import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChatAvatarComponent } from './chat-avatar/chat-avatar.component'
import { ChatWidgetComponent } from './chat-widget/chat-widget.component'
import { ChatInputComponent } from './chat-input/chat-input.component'
import { ChatPreguntasComponent } from './chat-preguntas/chat-preguntas.component'
import { NewTarjetaComponent } from './new-tarjeta/new-tarjeta.component'
import { ChatConfigComponent } from './chat-config/chat-config.component'
import { SocketService } from './shared/services/socket.service';
import { AngularDraggableModule } from 'angular2-draggable';
import { CookieService } from 'ngx-cookie-service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';

@NgModule({
  imports: [CommonModule,AngularDraggableModule,SweetAlert2Module],
  declarations: [ChatAvatarComponent, ChatWidgetComponent, ChatInputComponent, ChatConfigComponent,ChatPreguntasComponent,SanitizeHtmlPipe,NewTarjetaComponent],
  providers: [SocketService,CookieService,SanitizeHtmlPipe],
  exports: [ChatWidgetComponent, ChatConfigComponent],
  entryComponents: [ChatWidgetComponent, ChatConfigComponent],
}) 
export class ChatModule {}
  