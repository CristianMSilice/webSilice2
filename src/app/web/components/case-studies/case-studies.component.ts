import { Component, OnInit } from '@angular/core';
import { CASESTUDIES, caseStudies } from "./caseStudies";
@Component({
  selector: 'case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  CASESTUDIES: Array<caseStudies>=CASESTUDIES;
  constructor() { }
  selected=0;
  ngOnInit() {
  }

  selectNewTab(i){
    this.selected=i;
  }

}
