import { Injectable } from '@angular/core';
import { Parcel } from './parcel.interface';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  parcels: Parcel[] = [];

  addParcel(parcel: Parcel): void {
    this.parcels.push(parcel);
  }

  getAllParcels(): Parcel[] {
    return this.parcels;
  }
}
