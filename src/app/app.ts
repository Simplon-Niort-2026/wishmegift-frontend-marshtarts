import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stars } from "./shared/stars/stars";
import { faTrashCan, faPenToSquare, faPlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Tag } from './shared/tag/tag';
import { Icon } from './shared/icon/icon';
import { DisplayGift } from './components/ui/card/display-gift/display-gift';
import { FormGift } from './components/ui/card/form-gift/form-gift';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Stars, Tag, Icon, DisplayGift, FormGift],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('mon-projet');

 
  iconPencil = faPenToSquare;
  iconPlus = faPlus;
  iconProfil = faCircleUser;

  clickable() {
    console.log("Cette icône est clickable !");
    
  }

}
