import { Component, OnInit } from '@angular/core';
import { DataWpService } from 'src/app/desktop-web/services/data-wp.service';


@Component({
  selector: 'blog-destacados',
  templateUrl: './blog-destacados.component.html'
})
export class BlogDestacadosComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getAll('posts?categories=3', 3).subscribe(res => this.data = res)
  }

}
