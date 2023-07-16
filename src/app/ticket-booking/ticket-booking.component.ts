import { Component, OnInit } from '@angular/core';
import { TicketBookingService } from '../ticket-booking.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css'],
})
export class TicketBookingComponent implements OnInit {
  seatsAvailable: number;
  time: Date = new Date();
  userForm: FormGroup;
  Users: any[] = [{
    name: "Abhinav",
    tickets: 5,
    date: "data"
  },{
    name: "Akash",
    tickets: 51,
    date: "data"
  }]
  temp: "string"
  constructor(
    private ticketBookingService: TicketBookingService,
    private formBuild: FormBuilder
  ) {
    setInterval(() => {
      this.time = new Date();
    }, 1);
    this.checkCurrentAvailableSeats();
  }

  ngOnInit() {
    this.userForm = this.formBuild.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailId: [null, [Validators.required]],
      age: [null, [Validators.required]],
      mobileNumber: [null, [Validators.required]],
      tickets: [null, []],
    });
  }

  checkCurrentAvailableSeats() {
    this.ticketBookingService.checkAvailableSeats().subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUsersTicketsByEmail() {
    let emailId:String
    this.ticketBookingService.getUsersTickets(emailId).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  submitForm() {
    console.log(this.userForm.value);
    this.ticketBookingService.bookTicket(this.userForm.value).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
