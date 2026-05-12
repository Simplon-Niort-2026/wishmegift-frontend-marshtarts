import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.html',
  styleUrl: './stars.css',
})
export class Stars {
  readonly stars = 5;
  readonly rating = signal(0);
  setRating = (value: number) => this.rating.set(value);
}
