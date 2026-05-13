import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-gift',
  imports: [],
  templateUrl: './display-gift.html',
  styleUrls: ['./display-gift.css'],
})
export class DisplayGift {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() price: number = 0;
  @Input() envy: number = 0;
}
