import { Component, output, signal } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Stars } from "../../../../shared/stars/stars";

@Component({
  selector: 'app-form-gift',
  imports: [Icon, Stars],
  templateUrl: './form-gift.html',
  styleUrl: './form-gift.css',
})
export class FormGift {
  title = signal<string>('');
  link = signal<string>('');
  price = signal<number>(0);
  envy = signal<number>(0);

 iconTrash = faTrashCan;
  deleted = output<void>();
}
