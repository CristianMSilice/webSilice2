import { Component, OnInit } from '@angular/core';
import { SiblingService } from 'src/app/chat/shared/services/sibling.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {



  sliderItem: Array<any> = [
    { image: "sergio.jpg", name: "Sergio Alvano", position: "CEO" },
    { image: "diana.jpg", name: "Diana Castellanos", position: "Responsable de alianzas estratégica" },
    { image: "fernando.jpg", name: "Fernando Fernández", position: "Lider de Desarrollo" },
    { image: "juan.jpg", name: "Juan Antonio Blanco", position: "Country Manager España" },
    { image: "alvaro.jpg", name: "Álvaro Andrés Ortíz", position: "Country Manager Colombia" },
    { image: "jonatan.jpg", name: "Jonathan Díaz", position: "Country Manager Panamá" },
  ]

  constructor(private SiblingService: SiblingService) {
  }
  ngOnInit() {
  }

}
