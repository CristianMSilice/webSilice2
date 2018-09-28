import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Injector, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements'
import { ChatModule, ChatWidgetComponent, ChatConfigComponent } from './chat/'
import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ChatModule,HttpClientModule,HttpModule],
  providers: [
    ConfigService,
    { provide: 'CONFIGPATH', useValue: '/assets/config.json' },
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
