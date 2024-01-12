import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { NewBookingComponent } from './new-booking/new-booking.component';

const routes: Routes = [
  { path:"foglalasok", component: BookingsComponent},
  { path:"ujfoglalas", component: NewBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
