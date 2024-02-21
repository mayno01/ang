import { Component,Input } from '@angular/core';
import { Class } from 'src/model/class';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent {

  @Input() class: Class | undefined;

}
