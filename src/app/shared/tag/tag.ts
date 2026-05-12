import { from } from "rxjs";    
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrls: ['./tag.css'],
})
export class Tag {
  @Input() tag : string = '';
  @Input() color : string = '#000000';

  
}

