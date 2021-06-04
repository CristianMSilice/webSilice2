import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ChatConfigComponent, ChatModule, ChatWidgetComponent } from './chat/';
import { EncsessionService } from './chat/shared/helpers/encsession.service';
import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config';
 
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ChatModule,HttpClientModule,HttpModule,NgxLinkifyjsModule.forRoot(),
    NgxWebstorageModule.forRoot()],
 
  providers: [
    ConfigService,
    EncsessionService,
    { provide: 'CONFIGPATH', useValue: './config.json' },
    { provide: 'APIURL-VAR', useValue: 'TOKEN' },
    {
      provide: TOKEN, useFactory: ConfigFactory,
      deps: [ConfigService, 'CONFIGPATH', 'APIURL-VAR']
    }
  ],
  exports: [ChatModule] 
})
export class ElementModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const chatConfig = <any>createCustomElement(ChatConfigComponent, {
      injector: this.injector,
    })
    const chatWidget = <any>createCustomElement(ChatWidgetComponent, {
      injector: this.injector,
    })
    customElements.define('chat-config', chatConfig)
    customElements.define('chat-widget', chatWidget)
  }
}
 