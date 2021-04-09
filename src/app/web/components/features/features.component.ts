import { Component, OnInit } from '@angular/core';
import { SiblingService } from 'src/app/chat/shared/services/sibling.service';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  constructor(public SiblingService: SiblingService) {
  }

  ngOnInit() {
  }

}
