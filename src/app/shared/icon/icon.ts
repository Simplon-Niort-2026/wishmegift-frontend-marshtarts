import { Component, input, InputSignal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  standalone:true,
  imports: [FontAwesomeModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class Icon {

  icon = input<IconDefinition>();
  size = input<'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x'>('1x');
  color = input<string>('currentColor');
}
