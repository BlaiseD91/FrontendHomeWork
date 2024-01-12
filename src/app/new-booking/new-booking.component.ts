import { DatePipe, JsonPipe } from '@angular/common';
import { Component, ɵinternalCreateApplication } from '@angular/core';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css'],
  providers: [DatePipe]
})
export class NewBookingComponent {

  today:any
  hiba = false

  newBooking:any = {
    cim: "",
    datum: "",
    fo: "2",
    iranyitoszam: "",
    nev: ""
  } 


  constructor(private datePipe: DatePipe) {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    this.newBooking['datum'] = this.today
  }

  postBooking(){
    if(this.newBooking['cim']!="" && this.newBooking['fo']>=2 && this.newBooking['fo']<=16 &&
      this.newBooking['iranyitoszam']!= "" && this.newBooking['nev']!="" && this.newBooking['datum']!=""){
        console.log(this.newBooking)
        // TODO console.log törlése
        this.hiba = false
        this.newBooking = {
          cim: "",
          datum: this.today,
          fo: "2",
          iranyitoszam: ""
        }
    }
    else {
      this.hiba = true
      console.log("HIBA")
      // TODO console.log törlése
    }
  }
}
