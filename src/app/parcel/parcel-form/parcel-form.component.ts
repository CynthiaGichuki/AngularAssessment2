import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Parcel } from '../parcel.interface';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css']
})
export class ParcelFormComponent implements OnInit {

  default = 'default'
  form!: FormGroup

  constructor(private parcelService: ParcelService){

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      fullname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email,Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/), Validators.pattern(/.*@travel.com$/)]),
      destination: new FormControl(null, [Validators.required]),    
    })
  }
  addDestination():void {
     const parcel: Parcel = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      destination: this.form.get('destination').value
    };
    this.parcelService.addParcel(parcel);
    this.form.reset();
  }
  
}






 

  


