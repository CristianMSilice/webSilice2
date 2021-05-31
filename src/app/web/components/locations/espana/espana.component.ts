import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../../services/datawp.service';

@Component({
  selector: 'espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.scss']
})
export class EspanaComponent implements OnInit {

  constructor(
    // private dataWpService: DataWpService
  ) {}

  data = []

  ngOnInit() {
    // this.dataWpService.dataSedeSpain().subscribe((data: any[]) => {
    //   this.data = data;
    // })
  }

}
