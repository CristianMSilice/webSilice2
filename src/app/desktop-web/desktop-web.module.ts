import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsComponent } from './components/clients/clients.component';
import { InfografiaComponent } from './components/infografia/infografia.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainMenuComponent } from './components/layout/main-menu/main-menu.component';
import { LocationsHeaderComponent } from './components/locations-header/locations-header.component';
import { ColombiaComponent } from './components/locations/colombia/colombia.component';
import { EspanaComponent } from './components/locations/espana/espana.component';
import { PanamaComponent } from './components/locations/panama/panama.component';
import { MapaMundiComponent } from './components/mapa-mundi/mapa-mundi.component';
import { ModalComponent } from './components/modal/modal.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SliderComponent } from './components/slider/slider.component';
import { TeamComponent } from './components/team/team.component';
import { cTrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopWebComponent } from './desktop-web/desktop-web.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { PresenciaComponent } from './pages/somos/presencia/presencia.component';
import { SedeColombiaComponent } from './pages/somos/sedes/colombia/sede-colombia.component';
import { sedeEspanaComponent } from './pages/somos/sedes/espana/sede-espana.component';
import { SedePanamaComponent } from './pages/somos/sedes/sede-panama/sede-panama.component';
import { SomosComponent } from './pages/somos/somos/somos.component';
import { TrayectoriaComponent } from './pages/trayectoria/trayectoria.component';
import { PageSolucionesComponent } from './pages/page-soluciones/page-soluciones.component';
import { SolucionesComponent } from './components/soluciones/soluciones.component';
import { PageCasosComponent } from './pages/page-casos/page-casos.component';
import { CasosComponent } from './components/casos/casos.component';
import { ContactoComponent } from './pages/experiencia/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LaboratorioComponent } from './pages/experiencia/laboratorio/laboratorio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDestacadosComponent } from './pages/blog/blog-destacados/blog-destacados.component';
import { BlogGeneralComponent } from './pages/blog/blog-general/blog-general.component';
import { BlogHeaderComponent } from './pages/blog/blog-header/blog-header.component';
import { BlogPrincipalComponent } from './pages/blog/blog-principal/blog-principal.component';
import { BlogVistosComponent } from './pages/blog/blog-vistos/blog-vistos.component';
import { SingleComponent } from './pages/blog/single/single.component';
import { SharedModule } from '../shared/shared/shared.module';




@NgModule({
  declarations: [HomeComponent,
    SliderComponent,
    ModalComponent,
    DesktopWebComponent,
    HeaderComponent,
    MainMenuComponent,
    SomosComponent,
    NosotrosComponent,
    TrayectoriaComponent,
    cTrayectoriaComponent,
    EquipoComponent,
    TeamComponent,
    PresenciaComponent,
    InfografiaComponent,
    MapaMundiComponent,
    ClientsComponent,
    SedeColombiaComponent,
    sedeEspanaComponent,
    LocationsHeaderComponent,
    EspanaComponent,
    ColombiaComponent,
    SedePanamaComponent,
    PanamaComponent,
    PageSolucionesComponent,
    SolucionesComponent,
    PageCasosComponent,
    CasosComponent,
    ContactoComponent,
    LaboratorioComponent,
    BlogComponent,
    BlogDestacadosComponent,
    BlogGeneralComponent,
    BlogHeaderComponent,
    BlogPrincipalComponent,
    BlogVistosComponent,
    SingleComponent,
    ],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DesktopWebModule { }
