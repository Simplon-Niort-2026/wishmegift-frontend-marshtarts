import { Component, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-display-star',
  imports: [],
  templateUrl: './display-star.html',
  styleUrl: './display-star.css',
})

export class DisplayStar {
  @Input() rating: number = 0;
}
