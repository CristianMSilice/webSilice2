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
import { NosotrosSomosComponent } from './web/components/somos/somos.component'
import { TeamComponent } from './web/components/team/team.component'
import { NosotrosTrayectoriaComponent } from './web/components/trayectoria/trayectoria.component'
import { FooterComponent } from './web/layout/footer/footer.component'
import { MainHeaderComponent } from './web/layout/header/header.component'
import { MainMenuComponent } from './web/layout/menu/menu.component'
import { ContactoComponent } from './web/pages/experiencia/contacto/contacto.component'
import { LaboratorioComponent } from './web/pages/laboratorio/laboratorio.component'
import { MailService } from './web/services/mail.service'
import { SiblingsService } from './web/services/siblings.service'
import { WebComponent } from './web/web/web.component'


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
    ContactoComponent,
    MainHeaderComponent,
    MainMenuComponent,
    LaboratorioComponent,
    WebComponent,
    NosotrosSomosComponent,
    NosotrosTrayectoriaComponent,
    FooterComponent,
    MainMenuComponent,
    TeamComponent
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
    MailService,
    SiblingsService,
    Title
  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
