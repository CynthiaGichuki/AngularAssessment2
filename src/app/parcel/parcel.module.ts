import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcelRoutingModule } from './parcel-routing.module';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';
import { ParcelDisplayComponent } from './parcel-display/parcel-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParcelFormComponent,
    ParcelDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParcelRoutingModule,
  ]
})
export class ParcelModule { }
