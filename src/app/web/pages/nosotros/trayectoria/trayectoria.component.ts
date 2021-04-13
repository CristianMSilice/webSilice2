import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../chat/shared/model/event';

@Component({
  selector: 'trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.scss']
})
export class TrayectoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

onDragStart(event: DragEvent) {
  console.log(`starting`, event);
  // Hide dragged element
}

onDragEnd(event: DragEvent) {
  console.log('drag end', event);
  // Show dragged element again
}
onDrag(event: DragEvent) {
  console.log('on Drag', event);
  // Show dragged element again
}
}
