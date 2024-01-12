import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css'],
  providers: [DatePipe]
})
export class NewBookingComponent {

  date:any

  constructor(private datePipe: DatePipe) {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd')

    console.log(this.date)
  }
}
