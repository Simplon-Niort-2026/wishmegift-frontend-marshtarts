import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Icon } from './shared/icon/icon';
import { faTrashCan, faStar, faPenToSquare, faPlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Icon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mon-projet');

  iconTrash = faTrashCan;
  iconPencil = faPenToSquare;
  iconPlus = faPlus;
  iconProfil = faCircleUser;
}
