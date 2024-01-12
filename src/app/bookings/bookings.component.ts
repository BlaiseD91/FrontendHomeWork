import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  //TODO még rendezni kell dátum szerint csökkenőbe
  bookings:any;
  tableHeaders = ["Dátum", "Név", "Fő", "Cím", "Iránytószám"]

  constructor(private baseService:BaseService){
    this.baseService.getBookings().subscribe(
      {
        next: (res) => {
          this.bookings = res
          this.bookings = this.bookings.sort((a:any, b:any) => {
            if (a.datum > b.datum) { return -1 }
            else { return 0 }
          });
        },
        error: (err) => console.log("Az adatok betöltése sikertelen", err)
      }
    )
  }
}
