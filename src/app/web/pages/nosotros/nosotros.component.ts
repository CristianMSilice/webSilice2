import { Component, OnInit } from '@angular/core';
import { SiblingsService } from '../../Services/siblings.service';

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor(private siblingsService:SiblingsService) { }

  ngOnInit() {
  }
  
  openModal() {
    this.siblingsService.modifyModal(true);
  }
}
