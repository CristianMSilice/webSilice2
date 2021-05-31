import { BrowserModule, Title } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ElementModule } from './element.module'
import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config'
import { HttpModule } from '@angular/http'
import { NgxLinkifyjsModule } from 'ngx-linkifyjs'
import { HttpClientModule } from '@angular/common/http'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared/shared.module'


import { CookieService } from 'ngx-cookie-service'
import { EncsessionService } from './chat/shared/helpers/encsession.service'
import { MailService } from './web/services/mail.service'
import { ParticlesModule } from 'angular-particle'
import { RouterModule, Routes } from '@angular/router'
import { SiblingsService } from './web/services/siblings.service'
import { InlineSVGModule } from 'ng-inline-svg'


import { AppComponent } from './app.component'
import { BlogComponent } from './web/pages/blog/blog.component'
import { PageCasosComponent } from './web/pages/casos/page-casos.component'
import { ContactoComponent } from './web/pages/experiencia/contacto/contacto.component'
import { ColombiaComponent } from './web/components/locations/colombia/colombia.component'
import { PageEquipoComponent } from './web/pages/nosotros/equipo/page-equipo.component'
import { EspanaComponent } from './web/components/locations/espana/espana.component'
import { HomeComponent } from './web/pages/home/home.component'
import { LaboratorioComponent } from './web/pages/laboratorio/laboratorio.component'
import { LocationsHeaderComponent } from './web/components/locations/locations-header/locations-header.component'
import { ModalComponent } from './web/components/modal/modal.component'
import { MapaMundiComponent } from './web/components/mapa-mundi/mapa-mundi.component'
import { PanamaComponent } from './web/components/locations/panama/panama.component'
import { PageEspanaComponent } from './web/pages/experiencia/sedes/page-espana/page-espana.component'
import { PageColombiaComponent } from './web/pages/experiencia/sedes/page-colombia/page-colombia.component'
import { PagePanamaComponent } from './web/pages/experiencia/sedes/page-panama/page-panama.component'
import { PageSolucionesComponent } from './web/pages/soluciones/page-soluciones.component'
import { SliderComponent } from './web/components/principalSlider/slider/slider.component'
import { PageTrayectoriaComponent } from './web/pages/nosotros/trayectoria/page-trayectoria.component'
import { WebComponent } from './web/web/web.component'
import { ClientsComponent } from './web/components/clients/clients.component'
import { NosotrosSomosComponent } from './web/components/somos/somos.component'
import { NosotrosTrayectoriaComponent } from './web/components/trayectoria/trayectoria.component'
import { NosotrosEquipoComponent } from './web/components/equipo/equipo.component'
import { NosotrosPresenciaComponent } from './web/components/presencia/presencia.component'
import { PageSomosComponent } from './web/pages/nosotros/somos/page-somos.component'
import { PagePresenciaComponent } from './web/pages/nosotros/presencia/page-presencia.component'
import { NosotrosInfografiaComponent } from './web/components/infografia/infografia.component'
import { SolucionesComponent } from './web/components/soluciones/soluciones.component'
import { CasosComponent } from './web/components/casos/casos.component'
import { FooterComponent } from './web/layout/footer/footer.component'
import { MainMenuComponent } from './web/layout/menu/menu.component'
import { MainHeaderComponent } from './web/layout/header/header.component'
import { BlogDestacadosComponent } from './web/pages/blog/blog-destacados/blog-destacados.component'
import { BlogPrincipalComponent } from './web/pages/blog/blog-principal/blog-principal.component'
import { BlogGeneralComponent } from './web/pages/blog/blog-general/blog-general.component'
import { BlogVistosComponent } from './web/pages/blog/blog-vistos/blog-vistos.component'
import { SingleComponent } from './web/pages/blog/single/single.component'
import { BlogHeaderComponent } from './web/pages/blog/blog-header/blog-header.component'
import { TeamComponent } from './web/components/team/team.component'
 
const routes: Routes = [
  {
    path: '', component: WebComponent,
    children: [
      { path: 'nosotros', component: PageSomosComponent, },
      { path: 'nosotros/trayectoria', component:PageTrayectoriaComponent},
      { path: 'nosotros/equipo', component:PageEquipoComponent},
      { path: 'nosotros/presencia', component: PagePresenciaComponent },
      { path: 'nosotros/sedes/panama', component: PagePanamaComponent },
      { path: 'nosotros/sedes/colombia', component: PageColombiaComponent },
      { path: 'nosotros/sedes/espana', component: PageEspanaComponent },
      { path: 'experiencia/itm', component: LaboratorioComponent },
      { path: 'soluciones', component: PageSolucionesComponent },
      { path: 'casos', component: PageCasosComponent },
      { path: 'experiencia/contacto', component: ContactoComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/:id', component: SingleComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
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
    BlogComponent,
    PageCasosComponent,
    ContactoComponent,
    PageEquipoComponent,
    MainHeaderComponent,
    MainMenuComponent,
    HomeComponent,
    LaboratorioComponent,
    PageSolucionesComponent,
    SliderComponent,
    PageTrayectoriaComponent,
    WebComponent,
    ModalComponent,
    LocationsHeaderComponent,
    PanamaComponent,
    ColombiaComponent,
    EspanaComponent,
    PageEspanaComponent,
    PageColombiaComponent,
    PagePanamaComponent,
    MapaMundiComponent,
    ClientsComponent,
    TeamComponent,
    NosotrosSomosComponent,
    NosotrosTrayectoriaComponent,
    NosotrosEquipoComponent,
    NosotrosPresenciaComponent,
    PageSomosComponent,
    PagePresenciaComponent,
    NosotrosInfografiaComponent,
    SolucionesComponent,
    CasosComponent,
    FooterComponent,
    MainMenuComponent,
    BlogDestacadosComponent,
    BlogPrincipalComponent,
    BlogGeneralComponent,
    BlogVistosComponent,
    BlogHeaderComponent,
    SingleComponent
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
