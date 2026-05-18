import { Component, Input, signal } from '@angular/core';
import { DisplayStar } from '../../../../shared/display-star/display-star';

@Component({
  selector: 'app-display-gift',
  imports: [DisplayStar],
  templateUrl: './display-gift.html',
  styleUrls: ['./display-gift.css'],
})
export class DisplayGift {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() price: number = 0;
  @Input() envy: number = 0;
}
