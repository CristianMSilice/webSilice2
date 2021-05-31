import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { DataWpService } from '../../../services/datawp.service';
import { Blog } from '../../../models';
import { take } from 'rxjs/operators';

@Component({
  selector: 'single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  data$: Observable<Blog>
  
  constructor(
    private route: ActivatedRoute,
    private dataWpService: DataWpService
  ) { 
  }

  ngOnInit() {
    this.route.params.pipe( take(1) ).subscribe((params) => {
      const id = params['id']
      this.data$ = this.dataWpService.getPostById(id)
    })
  }

}
