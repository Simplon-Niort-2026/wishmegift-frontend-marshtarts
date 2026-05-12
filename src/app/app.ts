import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stars } from "./shared/stars/stars";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Stars],
import { faTrashCan, faPenToSquare, faPlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Tag } from './shared/tag/tag';
import { Icon } from './shared/icon/icon';
})

export class App {
  protected readonly title = signal('mon-projet');

  iconTrash = faTrashCan;
  iconPencil = faPenToSquare;
  iconPlus = faPlus;
  iconProfil = faCircleUser;

  clickable() {
    console.log("Cette icône est clickable !");
    
  }

}
