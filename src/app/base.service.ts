import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url="http://localhost:3000/foglalasok";

  constructor(private client:HttpClient) { 
    
  }

  getBookings(){
    return this.client.get(this.url)
  }

  postBooking(booking:any){
    this.client.post(this.url,booking).subscribe(
      {
        next:()=>this.getBookings(),
        error:(err)=>console.log("Hiba a foglalás felvételénél: ",err)
      }
    )
  }
}
