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
  siker = false

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
        this.base.postBooking(this.newBooking)
        this.hiba = false
        this.siker = true
        setTimeout(() => this.router.navigate(['/foglalasok']), 3000);  
    }
    else {
      this.hiba = true
      this.siker = false
      console.log("HIBA: nem megfelelőek az adatok!")
    }
  }
}
