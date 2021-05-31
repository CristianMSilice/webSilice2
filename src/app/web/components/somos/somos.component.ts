import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../services/datawp.service';

@Component({
  selector: 'nosotros-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.scss']
})
export class NosotrosSomosComponent implements OnInit {
  public data: any
  public activeElement : number  

  constructor(
    private dataWpService: DataWpService
  ) { }

  public selectedItem(id: any) {
    this.activeElement = id;
  }

  ngOnInit() {
    this.dataWpService.getSomos('somos').subscribe(res => this.data = res)
  }
}

