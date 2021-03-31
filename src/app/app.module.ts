import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ElementModule } from './element.module'
import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config'
import { HttpModule } from '@angular/http'
import { NgxLinkifyjsModule } from 'ngx-linkifyjs'
import { HttpClientModule } from '@angular/common/http'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


import { CookieService } from 'ngx-cookie-service'
import { EncsessionService } from './chat/shared/helpers/encsession.service';
import { MailService } from './web/Services/mail.service'
import { ParticlesModule } from 'angular-particle'
import { RouterModule, Routes } from '@angular/router'
import { SiblingsService } from './web/Services/siblings.service'


import { AppComponent } from './app.component'
import { BlogComponent } from './web/pages/blog/blog.component'
import { CasosComponent } from './web/pages/casos/casos.component'
import { ContactoComponent } from './web/pages/experiencia/contacto/contacto.component'
import { CaseStudiesComponent } from "./web/components/case-studies/case-studies.component"
import { ColombiaComponent } from './web/components/locations/colombia/colombia.component'
import { EncabezadosComponent } from './web/encabezados/encabezados.component'
import { EquipoComponent } from './web/pages/nosotros/equipo/equipo.component'
import { ExperienciaComponent } from './web/pages/experiencia/experiencia.component'
import { EspanaComponent } from './web/components/locations/espana/espana.component';
import { FeaturesComponent } from './web/components/features/features.component'
import { GlobalStatsComponent } from './web/components/global-stats/global-stats.component'
import { HomeComponent } from './web/pages/home/home.component'
import { HeaderComponent } from './web/components/header/header.component'
import { LaboratorioComponent } from './web/pages/laboratorio/laboratorio.component'
import { ModalComponent } from './web/components/modal/modal.component'
import { NavComponent } from './web/components/header/nav/nav.component'
import { NosotrosComponent } from './web/pages/nosotros/nosotros.component'
import { PanamaComponent } from './web/components/locations/panama/panama.component'
import { PageEspanaComponent } from './web/pages/experiencia/sedes/page-espana/page-espana.component';
import { PageColombiaComponent } from './web/pages/experiencia/sedes/page-colombia/page-colombia.component';
import { PagePanamaComponent } from './web/pages/experiencia/sedes/page-panama/page-panama.component'
import { SolucionesComponent } from './web/pages/soluciones/soluciones.component'
import { SliderComponent } from './web/components/principalSlider/slider/slider.component'
import { SolutionsComponent } from './web/components/solutions/solutions.component'
import { TrayectoriaComponent } from './web/pages/nosotros/trayectoria/trayectoria.component'
import { TeamComponent } from './web/components/team/team.component';
import { TimelineComponent } from './web/components/timeline/timeline.component'
import { WebComponent } from './web/web/web.component';
import { YouTubeVideoComponent } from './web/components/you-tube-video/you-tube-video.component';

const routes: Routes = [
  {
    path: 'home', component: WebComponent,
    children: [
      { path: 'nosotros', component: NosotrosComponent, },
      { path: 'nosotros/trayectoria', component:TrayectoriaComponent},
      { path: 'nosotros/equipo', component:EquipoComponent},
      { path: 'laboratorio', component: LaboratorioComponent },
      { path: 'soluciones', component: SolucionesComponent },
      { path: 'casos', component: CasosComponent },
      { path: 'experiencia', component: ExperienciaComponent },
      { path: 'experiencia/sedes', component: PagePanamaComponent },
      { path: 'experiencia/sedes/colombia', component: PageColombiaComponent },
      { path: 'experiencia/sedes/espana', component: PageEspanaComponent },
      { path: 'experiencia/contacto', component: ContactoComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'casos', component: CasosComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: '/home/home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/home/home', pathMatch: 'full' }
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
    ParticlesModule
  ],
  declarations: [AppComponent,
    BlogComponent,
    CasosComponent,
    CaseStudiesComponent,
    ContactoComponent,
    EncabezadosComponent,
    EquipoComponent,
    ExperienciaComponent,
    GlobalStatsComponent,
    HeaderComponent,
    HomeComponent,
    LaboratorioComponent,
    NosotrosComponent,
    FeaturesComponent,
    NavComponent,
    SolucionesComponent,
    SolutionsComponent,
    SliderComponent,
    TrayectoriaComponent,
    TimelineComponent,
    TeamComponent,
    WebComponent,
    ModalComponent,
    YouTubeVideoComponent,
    PanamaComponent,
    ColombiaComponent,
    EspanaComponent,
    PageEspanaComponent,
    PageColombiaComponent,
    PagePanamaComponent,
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
    SiblingsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
