import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule, Title } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'
import { ParticlesModule } from 'angular-particle'
import { InlineSVGModule } from 'ng-inline-svg'
import { CookieService } from 'ngx-cookie-service'
import { NgxLinkifyjsModule } from 'ngx-linkifyjs'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { AppComponent } from './app.component'
import { EncsessionService } from './chat/shared/helpers/encsession.service'
import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config'
import { ElementModule } from './element.module'
import { SharedModule } from './shared/shared/shared.module'
import { CasosComponent } from './web/components/casos/casos.component'
import { ClientsComponent } from './web/components/clients/clients.component'
import { NosotrosEquipoComponent } from './web/components/equipo/equipo.component'
import { NosotrosInfografiaComponent } from './web/components/infografia/infografia.component'
import { ColombiaComponent } from './web/components/locations/colombia/colombia.component'
import { EspanaComponent } from './web/components/locations/espana/espana.component'
import { LocationsHeaderComponent } from './web/components/locations/locations-header/locations-header.component'
import { PanamaComponent } from './web/components/locations/panama/panama.component'
import { MapaMundiComponent } from './web/components/mapa-mundi/mapa-mundi.component'
import { ModalComponent } from './web/components/modal/modal.component'
import { NosotrosPresenciaComponent } from './web/components/presencia/presencia.component'
import { SliderComponent } from './web/components/principalSlider/slider/slider.component'
import { SolucionesComponent } from './web/components/soluciones/soluciones.component'
import { NosotrosSomosComponent } from './web/components/somos/somos.component'
import { TeamComponent } from './web/components/team/team.component'
import { NosotrosTrayectoriaComponent } from './web/components/trayectoria/trayectoria.component'
import { FooterComponent } from './web/layout/footer/footer.component'
import { MainHeaderComponent } from './web/layout/header/header.component'
import { MainMenuComponent } from './web/layout/menu/menu.component'
import { BlogDestacadosComponent } from './web/pages/blog/blog-destacados/blog-destacados.component'
import { BlogGeneralComponent } from './web/pages/blog/blog-general/blog-general.component'
import { BlogHeaderComponent } from './web/pages/blog/blog-header/blog-header.component'
import { BlogPrincipalComponent } from './web/pages/blog/blog-principal/blog-principal.component'
import { BlogVistosComponent } from './web/pages/blog/blog-vistos/blog-vistos.component'
import { BlogComponent } from './web/pages/blog/blog.component'
import { SingleComponent } from './web/pages/blog/single/single.component'
import { PageCasosComponent } from './web/pages/casos/page-casos.component'
import { ContactoComponent } from './web/pages/experiencia/contacto/contacto.component'
import { PageColombiaComponent } from './web/pages/experiencia/sedes/page-colombia/page-colombia.component'
import { PageEspanaComponent } from './web/pages/experiencia/sedes/page-espana/page-espana.component'
import { PagePanamaComponent } from './web/pages/experiencia/sedes/page-panama/page-panama.component'
import { HomeComponent } from './web/pages/home/home.component'
import { LaboratorioComponent } from './web/pages/laboratorio/laboratorio.component'
import { PageEquipoComponent } from './web/pages/nosotros/equipo/page-equipo.component'
import { PagePresenciaComponent } from './web/pages/nosotros/presencia/page-presencia.component'
import { PageSomosComponent } from './web/pages/nosotros/somos/page-somos.component'
import { PageTrayectoriaComponent } from './web/pages/nosotros/trayectoria/page-trayectoria.component'
import { PageSolucionesComponent } from './web/pages/soluciones/page-soluciones.component'
import { MailService } from './web/services/mail.service'
import { SiblingsService } from './web/services/siblings.service'
import { WebComponent } from './web/web/web.component'




 
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
    SingleComponent,
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
