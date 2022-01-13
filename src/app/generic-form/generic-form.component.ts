import { Component, OnInit, ViewChild } from "@angular/core";
import { take } from "rxjs";
import { Metadata } from "../metadata";
import { MetadataService } from "../metadata-service.service";

@Component({
    selector: 'app-generic-form-component',
    styleUrls: ['generic-form.component.scss'],
    templateUrl: 'generic-form.component.html'
}) export class GenericFormComponent implements OnInit {

    @ViewChild('form') form?: HTMLFormElement;

    initialValue: any = {firstName: "Jesus", lastName: "Belmonte", birthdate: "01/01/1990"};
    value: any = {firstName: "Jesus", lastName: "Belmonte", birthdate: "01/01/1990"};

    fields?: Metadata[];

    constructor(private metadataService: MetadataService) {

    }

    ngOnInit(): void {
        this.metadataService.get().pipe(take(1)).subscribe(
            metadatas => {
                this.fields = metadatas;
            }
        )
    }

    private diff(): any {
        const diff: {[key: string]: any} = {};
        const value = this.getVal();
        for (const key in this.initialValue) {
            const newVal = value[key];
            if (newVal !== this.initialValue[key]) {
                diff[key] = newVal;
            }
        }
        return diff;
    }

    getVal(): any {
        const value: {[key: string]: any} = {};
        for (const key in this.initialValue) {
            const element: any = document.getElementById(key);
            value[key] = element!.value;
        }
        return value;
    }

    onSubmit(e: any): void {
        e.preventDefault();
        alert(JSON.stringify(this.diff(), null, 2));
    }
}