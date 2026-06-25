import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stars } from "./shared/stars/stars";
import { faPenToSquare, faPlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { DisplayGift } from './components/ui/card/display-gift/display-gift';
import { FormGift } from './components/ui/card/form-gift/form-gift';
import { Header } from "./shared/header/header";
import { ReserveButton } from './shared/reserve-button/reserve-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayGift, FormGift, Header, ReserveButton],
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
