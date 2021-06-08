import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

import { Blog } from '../../../models';
import { take } from 'rxjs/operators';
import { DataWpService } from 'src/app/desktop-web/services/data-wp.service';

@Component({
  selector: 'single',
  templateUrl: './single.component.html'
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
