import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule, Title } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ParticlesModule } from 'angular-particle'
import { InlineSVGModule } from 'ng-inline-svg'
import { CookieService } from 'ngx-cookie-service'
import { NgxLinkifyjsModule } from 'ngx-linkifyjs'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EncsessionService } from './chat/shared/helpers/encsession.service'
import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config'
import { ElementModule } from './element.module'
import { SharedModule } from './shared/shared/shared.module'


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ElementModule,
    HttpClientModule,
    HttpModule,
    NgxLinkifyjsModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ParticlesModule,
    InlineSVGModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
  ],

  providers: [
    ConfigService,
    CookieService,
    { provide: 'CONFIGPATH', useValue: './assets/config.json' },
    { provide: 'APIURL-VAR', useValue: 'TOKEN' },
    {
      provide: TOKEN, useFactory: ConfigFactory,
      deps: [ConfigService, 'CONFIGPATH', 'APIURL-VAR']
    },
    EncsessionService,
    Title
  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
