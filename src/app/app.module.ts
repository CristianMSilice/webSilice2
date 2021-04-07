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
import { MapaMundiComponent } from './web/components/mapa-mundi/mapa-mundi.component';
import { NavComponent } from './web/components/header/nav/nav.component'
import { NosotrosComponent } from './web/pages/nosotros/nosotros.component'
import { NoticiasComponent } from './web/pages/noticias/noticias.component'
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
import { Noticia1Component } from './web/pages/blog/noticia1/noticia1.component';
import { Noticia2Component } from './web/pages/blog/noticia2/noticia2.component';
import { Noticia3Component } from './web/pages/blog/noticia3/noticia3.component';
import { Noticia4Component } from './web/pages/blog/noticia4/noticia4.component';
import { Noticia5Component } from './web/pages/blog/noticia5/noticia5.component';
import { Noticia6Component } from './web/pages/blog/noticia6/noticia6.component';

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
      { path: 'blog/reinventarse-a-traves-de-la-innovacion-el-nuevo-reto-de-la-humanidad-en-el-2021', component: Noticia1Component },
      { path: 'blog/covid19-motor-de-la-innovacion-en-el-sector-salud', component: Noticia2Component },
      { path: 'blog/por-que-es-indispensable-para-tu-negocio-dar-el-paso-a-la-omnicanalidad', component: Noticia3Component },
      { path: 'blog/a-buen-emprendedor-decisiones-valientes', component: Noticia4Component },
      { path: 'blog/un-evolutivo-que-ha-cambiado-las-reglas-de-juego-de-la-era-digital-de-manera-definitiva', component: Noticia5Component },
      { path: 'blog/por-que-la-comunicacion-digital-es-indispensable-dentro-de-tu-estrategia-de-transformacion-digital', component: Noticia6Component },
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
    NoticiasComponent,
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
    Noticia1Component,
    Noticia2Component,
    Noticia3Component,
    Noticia4Component,
    Noticia5Component,
    Noticia6Component,
    MapaMundiComponent,
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
