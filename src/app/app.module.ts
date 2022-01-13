import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputComponent } from './date-input/date-input.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { MetadataService } from './metadata-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent,
    GenericFormComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MetadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
