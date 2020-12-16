import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ElementModule } from './element.module'
import { AppComponent } from './app.component'
import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config'
import { HttpModule } from '@angular/http'
import { NgxLinkifyjsModule } from 'ngx-linkifyjs'
import { CookieService } from 'ngx-cookie-service'

import { NgxWebstorageModule } from 'ngx-webstorage'

import { EncsessionService } from './chat/shared/helpers/encsession.service'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ElementModule, HttpClientModule, HttpModule, NgxLinkifyjsModule.forRoot(),
    NgxWebstorageModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    ConfigService,
    EncsessionService,
    CookieService,
    { provide: 'CONFIGPATH', useValue: './assets/config.json' },

    { provide: 'APIURL-VAR', useValue: 'TOKEN' },
    {
      provide: TOKEN, useFactory: ConfigFactory,
      deps: [ConfigService, 'CONFIGPATH', 'APIURL-VAR']
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
