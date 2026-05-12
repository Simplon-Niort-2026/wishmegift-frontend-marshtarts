import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stars } from "./shared/stars/stars";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Stars],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mon-projet');
}
