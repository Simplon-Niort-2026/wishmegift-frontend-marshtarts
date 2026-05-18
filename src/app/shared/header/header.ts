import { Component } from '@angular/core';
import { Icon } from "../icon/icon";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  iconProfil = faCircleUser;
}
