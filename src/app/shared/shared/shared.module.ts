import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubeVideoComponent } from 'src/app/web/components/you-tube-video/you-tube-video.component';



@NgModule({
  declarations: [
    YouTubeVideoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    YouTubeVideoComponent
  ]
})
export class SharedModule { }
