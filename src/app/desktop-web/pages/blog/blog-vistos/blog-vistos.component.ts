import { Component, OnInit } from '@angular/core';
import { DataWpService } from 'src/app/desktop-web/services/data-wp.service';


@Component({
  selector: 'blog-vistos',
  templateUrl: './blog-vistos.component.html'
})
export class BlogVistosComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getAll('posts?categories=4', 6).subscribe(res => this.data = res)
  }

}
