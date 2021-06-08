import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YouTubeVideoComponent } from 'src/app/shared/shared/you-tube-video/you-tube-video.component';



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
