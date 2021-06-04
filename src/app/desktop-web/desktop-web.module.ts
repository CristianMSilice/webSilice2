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




@NgModule({
  declarations: [HomeComponent, SliderComponent, ModalComponent, YouTubeVideoComponent, DesktopWebComponent, HeaderComponent, MainMenuComponent, SomosComponent, NosotrosComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ]
})
export class DesktopWebModule { }
