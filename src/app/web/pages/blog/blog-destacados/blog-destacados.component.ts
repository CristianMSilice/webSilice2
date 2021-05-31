import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../../services/datawp.service';

@Component({
  selector: 'blog-destacados',
  templateUrl: './blog-destacados.component.html',
  styleUrls: ['./blog-destacados.component.scss']
})
export class BlogDestacadosComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getAll('posts?categories=4', 3).subscribe(res => this.data = res)
  }

}
