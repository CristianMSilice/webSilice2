import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ElementModule } from './element.module'
import { HttpModule } from '@angular/http'
import { NgxLinkifyjsModule } from 'ngx-linkifyjs'
import { HttpClientModule } from '@angular/common/http'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { RouterModule, Routes } from '@angular/router';
import { ParticlesModule } from 'angular-particle';

import { ConfigFactory, ConfigService, TOKEN } from './chat/shared/services/config'
import { CookieService } from 'ngx-cookie-service'
import { EncsessionService } from './chat/shared/helpers/encsession.service';

import { AppComponent } from './app.component'
import { BlogComponent } from './web/pages/blog/blog.component';
import { CasosDeExitoComponent } from './web/pages/casos-de-exito/casos-de-exito.component';
import { CasosComponent } from './web/pages/casos/casos.component';
import { CaseStudiesComponent } from "./web/components/case-studies/case-studies.component";
import { ContactoComponent } from './web/pages/experiencia/contacto/contacto.component';
import { ContactFormComponent } from './web/components/contact-form/contact-form.component'
import { EncabezadosComponent } from './web/encabezados/encabezados.component';
import { ExperienciaComponent } from './web/pages/experiencia/experiencia.component';
import { EquipoComponent } from './web/pages/nosotros/equipo/equipo.component'
import { GlobalStatsComponent } from './web/components/global-stats/global-stats.component'
import { HomeComponent } from './web/pages/home/home.component'
import { HeaderComponent } from './web/components/header/header.component';
import { LaboratorioComponent } from './web/pages/laboratorio/laboratorio.component';
import { NosotrosComponent } from './web/pages/nosotros/nosotros.component';
import { FeaturesComponent } from './web/components/features/features.component';
import { NoticiasComponent } from './web/pages/noticias/noticias.component';
import { NavComponent } from './web/components/header/nav/nav.component';
import { SolutionsComponent } from './web/components/solutions/solutions.component';
import { SolucionesComponent } from './web/pages/soluciones/soluciones.component';
import { SliderComponent } from './web/components/principalSlider/slider/slider.component'
import { SedesComponent } from './web/pages/experiencia/sedes/sedes.component';
import { TrayectoriaComponent } from './web/pages/nosotros/trayectoria/trayectoria.component'
import { TimelineComponent } from './web/components/timeline/timeline.component';
import { TeamComponent } from './web/components/team/team.component';
import { VenueComponent } from './web/components/venue/venue.component'
import { WebComponent } from './web/web/web.component';




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
      { path: 'experiencia/sedes', component: SedesComponent },
      { path: 'experiencia/contacto', component: ContactoComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'casos', component: CasosComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: '/home/home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/home/home', pathMatch: 'full' }
];

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
    ParticlesModule
  ],
  declarations: [AppComponent,
    BlogComponent,
    CasosComponent,
    CasosDeExitoComponent,
    CaseStudiesComponent,
    ContactoComponent,
    ContactFormComponent,
    EncabezadosComponent,
    EquipoComponent,
    ExperienciaComponent,
    GlobalStatsComponent,
    HeaderComponent,
    HomeComponent,
    LaboratorioComponent,
    NosotrosComponent,
    FeaturesComponent,
    NoticiasComponent,
    NavComponent,
    SolucionesComponent,
    SolutionsComponent,
    SliderComponent,
    SedesComponent,
    TrayectoriaComponent,
    TimelineComponent,
    TeamComponent,
    VenueComponent,
    WebComponent,
  ],

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
