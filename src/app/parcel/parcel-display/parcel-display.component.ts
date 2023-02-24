import { Component } from '@angular/core';
import { Parcel } from '../parcel.interface';

@Component({
  selector: 'app-parcel-display',
  templateUrl: './parcel-display.component.html',
  styleUrls: ['./parcel-display.component.css']
})
export class ParcelDisplayComponent {

  parcels: Parcel[];

  constructor(private parcelService: ParcelService) {
    this.parcels = this.parcelService.getAllParcels();
  }
}
