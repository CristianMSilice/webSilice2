import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../../services/datawp.service';

@Component({
  selector: 'blog-vistos',
  templateUrl: './blog-vistos.component.html',
  styleUrls: ['./blog-vistos.component.scss']
})
export class BlogVistosComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getAll('posts?categories=5', 6).subscribe(res => this.data = res)
  }

}
