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

import { EncsessionService } from './chat/shared/helpers/encsession.service';
import { EncabezadosComponent } from './web/encabezados/encabezados.component';
import { WebComponent } from './web/web/web.component';
import { BlogComponent } from './web/pages/blog/blog.component';
import { CasosComponent } from './web/pages/casos/casos.component';
import { CasosDeExitoComponent } from './web/pages/casos-de-exito/casos-de-exito.component';
import { ExperienciaComponent } from './web/pages/experiencia/experiencia.component';
import { LaboratorioComponent } from './web/pages/laboratorio/laboratorio.component';
import { NosotrosComponent } from './web/pages/nosotros/nosotros.component';
import { NoticiasComponent } from './web/pages/noticias/noticias.component';
import { SolucionesComponent } from './web/pages/soluciones/soluciones.component';
import { SolutionsComponent } from './web/components/solutions/solutions.component';
import { HeaderComponent } from './web/components/header/header.component';
import { NavComponent } from './web/components/header/nav/nav.component';
import { SliderComponent } from './web/components/principalSlider/slider/slider.component'
import { RouterModule ,Routes} from '@angular/router';
import { HomeComponent } from './web/pages/home/home.component'
import { CaseStudiesComponent } from "./web/components/case-studies/case-studies.component";



const routes: Routes = [
  {path: 'home', component:WebComponent,
  children:[
    {path:'nosotros', component:NosotrosComponent},
    {path:'laboratorio', component:LaboratorioComponent},
    {path:'soluciones', component:SolucionesComponent},
    {path:'casos', component:CasosComponent},
    {path:'experiencia', component:ExperienciaComponent},
    {path:'blog', component:BlogComponent},
    {path:'casos', component:CasosComponent},
    {path:'home', component:HomeComponent},
    {path:'**', redirectTo:'/home/home',pathMatch:'full'}
  ]  
},
{path:'**', redirectTo:'/home/home',pathMatch:'full'}
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
    NgxWebstorageModule.forRoot()
  ],
  declarations: [AppComponent,
     EncabezadosComponent,
     WebComponent,
     BlogComponent,
     CasosComponent,
     CasosDeExitoComponent,
     ExperienciaComponent,
     LaboratorioComponent,
     NosotrosComponent,
     NoticiasComponent,
     SolucionesComponent,
     SolutionsComponent,
     HeaderComponent,
     NavComponent,
     SliderComponent,
     CaseStudiesComponent,
     HomeComponent
    ],
  
  providers: [
    ConfigService,
    EncsessionService,
    CookieService,
    { provide: 'CONFIGPATH', useValue: './assets/config.json' },
    { provide: 'APIURL-VAR', useValue: 'TOKEN' },
    { provide: TOKEN, useFactory: ConfigFactory,
      deps: [ConfigService, 'CONFIGPATH', 'APIURL-VAR']
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
