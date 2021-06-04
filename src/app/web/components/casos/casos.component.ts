import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../services/datawp.service';


@Component({
  selector: 'casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.scss']
})
export class CasosComponent implements OnInit {
  public data: any 

  constructor(
    private dataWpService: DataWpService,

  ) { }

  ngOnInit() {
    this.dataWpService.getSomos('casos').subscribe(res => this.data = res)
  }

  selected=0;
  selectNewTab(i){
    this.selected=i;
  }

}
