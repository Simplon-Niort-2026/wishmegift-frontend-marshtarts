import { Component, Input, signal } from '@angular/core';
import { DisplayStar } from '../../../../shared/display-star/display-star';
import { Tag } from "../../../../shared/tag/tag";
import { ReserveButton } from "../../../../shared/reserve-button/reserve-button";

@Component({
  selector: 'app-display-gift',
  imports: [DisplayStar, Tag, ReserveButton],
  templateUrl: './display-gift.html',
  styleUrls: ['./display-gift.css'],
})
export class DisplayGift {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() price: number = 0;
  @Input() envy: number = 0;
}
