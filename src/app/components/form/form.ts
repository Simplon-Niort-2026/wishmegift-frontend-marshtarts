import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  title = signal<string>('');
  link = signal<string>('');
  price = signal<number>(0);
  envy = signal<number>(0);
}
