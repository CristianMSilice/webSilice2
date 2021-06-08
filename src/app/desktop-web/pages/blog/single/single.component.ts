import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

import { Blog } from '../../../models';
import { take } from 'rxjs/operators';
import { DataWpService } from 'src/app/desktop-web/services/data-wp.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'single',
  templateUrl: './single.component.html'
})
export class SingleComponent implements OnInit {
  data$: Observable<Blog>
  title = 'titulo de articulo  de prueba'
  constructor(
    private route: ActivatedRoute,
    private dataWpService: DataWpService,
    private titleService: Title,
    private meta :Meta
  ) {
  }

  ngOnInit() {

    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id']
      this.data$ = this.dataWpService.getPostById(id)

      this.data$.subscribe(res => {
        this.createtagsshared(res)
        console.log(res);
      })
    })
  }

  createtagsshared(data: Blog) {
    this.linkedintags(data);
  }
  linkedintags(data: Blog) {
    this.titleService.setTitle(data.title.rendered)

   
    
    this.meta.updateTag({property:'og:title', content: data.title.rendered})
    this.meta.updateTag({property:'og:image', content: data.better_featured_image.source_url})
    this.meta.updateTag({property:'og:type', content: 'website'})
    this.meta.updateTag({name:'author', content: data.acf.relacion[0].post_title})

    let div = document.createElement('div')
    div.innerHTML = data.excerpt.rendered;
    
    this.meta.updateTag({property:'og:description', content: div.innerText})
    
  //   let head = document.querySelector('head');
  // let tag1;
    // tag1 = document.createElement('meta');
    // tag1.setAttribute('property', 'og:title');
    // tag1.setAttribute('content', data.title.rendered);
    // head.appendChild(tag1)

    // tag1 = document.createElement('meta');
    // tag1.setAttribute('property', 'og:image');
    // tag1.setAttribute('content', data.better_featured_image.source_url);
    // head.appendChild(tag1)

    // tag1 = document.createElement('meta');
    // tag1.setAttribute('property', 'og:type');
    // tag1.setAttribute('content', 'website');
    // head.appendChild(tag1)

    //  tag1 = document.createElement('meta');
    // tag1.setAttribute('property', 'og:description');
    // let div = document.createElement('div')
    // div.innerHTML = data.excerpt.rendered;
    // tag1.setAttribute('content', div.innerText);
    // head.appendChild(tag1)

    // tag1 = document.createElement('meta');
    // tag1.setAttribute('name', 'author');
    // tag1.setAttribute('content', data.acf.relacion[0].post_title);
    // head.appendChild(tag1)
  }

}
