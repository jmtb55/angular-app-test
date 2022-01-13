import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Metadata } from "./metadata";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'}) export class MetadataService {

    private _jsonURL = 'assets/metadata.json';

    constructor(private httpClient: HttpClient) {

    }
    
    get(): Observable<Metadata[]> {
        return this.httpClient.get(this._jsonURL) as any;
    }
}