import { Component, OnInit } from '@angular/core';
import { DataWpService } from 'src/app/desktop-web/services/data-wp.service';


@Component({
  selector: 'blog-general',
  templateUrl: './blog-general.component.html'
})
export class BlogGeneralComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getAll('posts?categories=2', 2).subscribe(res => this.data = res)
  }

}
