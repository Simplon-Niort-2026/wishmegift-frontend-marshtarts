import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tag } from './shared/tag/tag';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tag],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mon-projet');
}
