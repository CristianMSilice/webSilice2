import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../../services/datawp.service';

@Component({
  selector: 'blog-general',
  templateUrl: './blog-general.component.html',
  styleUrls: ['./blog-general.component.scss']
})
export class BlogGeneralComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getAll('posts?categories=6', 2).subscribe(res => this.data = res)
  }

}
