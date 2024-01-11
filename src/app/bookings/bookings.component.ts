import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  bookings:any;


  constructor(private baseService:BaseService){
    this.baseService.getBookings().subscribe(
      {
        next: (response) => {
          this.bookings = response
        },
        error: (err) => console.log(err)
      }
    )
  }
}
