import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-generic-input-component',
    templateUrl: 'generic-input.component.html',
    styleUrls: ['generic-input.component.scss']
}) export class GenericInputComponent {

  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() required?: boolean
  @Input() label?: string;
  @Input() value?: string;
  @Input() id?: string;

  constructor() {
  }
}
