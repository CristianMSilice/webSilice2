import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesktopRoutingModule } from './desktop-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalComponent } from './components/modal/modal.component';
import { YouTubeVideoComponent } from './components/you-tube-video/you-tube-video.component';
import { DesktopWebComponent } from './desktop-web/desktop-web.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainMenuComponent } from './components/layout/main-menu/main-menu.component';
import { SomosComponent } from './pages/somos/somos/somos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TrayectoriaComponent } from './pages/trayectoria/trayectoria.component';
import { cTrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { TeamComponent } from './components/team/team.component';
import { PresenciaComponent } from './pages/somos/presencia/presencia.component';
import { InfografiaComponent } from './components/infografia/infografia.component';
import { MapaMundiComponent } from './components/mapa-mundi/mapa-mundi.component';
import { ClientsComponent } from './components/clients/clients.component';




@NgModule({
  declarations: [HomeComponent,
    SliderComponent,
    ModalComponent,
    YouTubeVideoComponent,
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
    ClientsComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ]
})
export class DesktopWebModule { }
