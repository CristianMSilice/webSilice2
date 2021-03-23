import { Component, Input, OnInit } from '@angular/core'
import { SiblingService } from './../../shared/services/sibling.service'
@Component({
  selector: 'app-emoji-silice',
  templateUrl: './emoji-silice.component.html',
  styleUrls: ['./emoji-silice.component.scss']
})
export class EmojiSiliceComponent implements OnInit {

  constructor(private _SiblingsService: SiblingService) { }
  @Input()
  toggleemojimenu
  selected = 0
  limits = [
    [128512, 128692, 128513],  // emojis
    [127747, 127776, 127748], // places
    [127789, 127868, 127822], // food
    [127968, 127984, 127969], // houses
    [128000, 128062, 128021], // animals
    [128066, 128145, 128100], // human
    [128147, 128255, 128161], // others
    [128336, 128359, 128337] // time
  ]
  emojis = [
  ]
  ngOnInit() {
    this.createEmojis()
  }
  addemoji(emoji) {
    this._SiblingsService.addemoji(emoji)
  }
  createEmojis() {
    for (let i = 0; i < this.limits.length; i++) {
      const values = []
      for (let j = this.limits[i][0]; j < this.limits[i][1]; j++) {
        values.push(`&#${j};`)
      }
      const emoji = {
        principal: `&#${this.limits[i][2]}; `,
        emojivalues: values
      }
      this.emojis.push(emoji)
    }


  }
  changeSelected(i) {
    this.selected = i
  }
}
