import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../services/data-wp.service';

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  public data: any
  public activeElement : number  

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getSomos('somos').subscribe(res => this.data = res)
  }
  
  public selectedItem(id: any) {
    this.activeElement = id;
  }


}
