import { Component, Input, OnInit } from '@angular/core';
import { SiblingsService } from '../../Services/siblings.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  showModal: boolean = false;
  @Input() show_internal_close: boolean = true;
  @Input() _idYoutube: number ;

  constructor(private siblingsService: SiblingsService) { }

  ngOnInit() {
    this.siblingsService.showModal$.subscribe(value => {
      this.showModal = value.value;
    })
  }
  reviewClose($event) {
    if (!$event.target.classList.contains('containerModalAndKey')) return;
    this.close();
  }
  close() {
    this.siblingsService.modifyModal(false,this._idYoutube);
  }

}
