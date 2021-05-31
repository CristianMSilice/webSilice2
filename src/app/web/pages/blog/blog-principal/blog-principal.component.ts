import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../../../services/datawp.service';

@Component({
  selector: 'blog-principal',
  templateUrl: './blog-principal.component.html',
  styleUrls: ['./blog-principal.component.scss']
})
export class BlogPrincipalComponent implements OnInit {
  public data: any

  constructor(
    private dataWpService: DataWpService
  ) { }

  ngOnInit() {
    this.dataWpService.getAll('posts?categories=3', 1).subscribe(res => this.data = res)
  }

}
