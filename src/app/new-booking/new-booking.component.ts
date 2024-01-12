import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

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


  constructor(private datePipe: DatePipe, private base:BaseService, private router: Router) {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    this.newBooking['datum'] = this.today
  }

  postBooking(){
    if(this.newBooking['cim']!="" && this.newBooking['fo']>=2 && this.newBooking['fo']<=16 &&
      this.newBooking['iranyitoszam']!= "" && this.newBooking['nev']!="" && this.newBooking['datum']!=""){
        console.log(this.newBooking)
        // TODO console.log törlése
        this.base.postBooking(this.newBooking)
        this.hiba = false
        this.router.navigate(['/foglalasok'])
    }
    else {
      this.hiba = true
      console.log("HIBA")
      // TODO console.log törlése
    }
  }
}
