import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  bookings:any;
  tableHeaders = ["Dátum", "Név", "Fő", "Cím", "Iránytószám"]

  constructor(private baseService:BaseService){
    this.baseService.getBookings().subscribe(
      {
        next: (res) => {
          this.bookings = res
        },
        error: (err) => console.log(err)
      }
    )
  }
}
