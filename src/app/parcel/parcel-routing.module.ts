import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelDisplayComponent } from './parcel-display/parcel-display.component';
import { AuthGuard } from './auth.guard';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';

const routes: Routes = [
  { path: '', component:ParcelDisplayComponent},
  {path:'add', component:ParcelFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelRoutingModule { }







