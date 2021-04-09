import { Component, OnInit } from '@angular/core';
import { CASESTUDIES, caseStudies } from "./caseStudies";
import { SiblingService } from 'src/app/chat/shared/services/sibling.service';

@Component({
  selector: 'case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  CASESTUDIES: Array<caseStudies>=CASESTUDIES;
  
  constructor(private SiblingService: SiblingService) {
  }

  selected=0;
  ngOnInit() {
  }

  selectNewTab(i){
    this.selected=i;
  }

}
