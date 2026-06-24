import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-reserve-button',
  imports: [],
  templateUrl: './reserve-button.html',
  styleUrls: ['./reserve-button.css'],
})
export class ReserveButton {
  @Input() reserved: boolean = false;
  @Input() label: string = '';
  @Input() type: string = 'reserve';
}
