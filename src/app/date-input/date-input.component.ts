import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-date-input-component',
    templateUrl: 'date-input.component.html',
    styleUrls: ['date-input.component.scss']
}) export class DateInputComponent {
    @Input() required?: boolean
    @Input() label?: string;
    @Input() value?: string;
    @Input() id?: string;
}
