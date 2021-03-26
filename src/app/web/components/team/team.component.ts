import { Component, OnInit } from '@angular/core';
import { SiblingService } from 'src/app/chat/shared/services/sibling.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private SiblingService:SiblingService) { }

  ngOnInit() {
  }
  
}
