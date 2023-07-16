import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketBookingService {
  constructor(private http: HttpClient) {}

  checkAvailableSeats() {
    // call databse to fetch current available seats
    return this.http.get(
      `https://stackblitzstartersw9fjn5-lt5b--3010--c53ab388.local-credentialless.webcontainer.io/`
    );
  }
  bookTicket(data) {
    // call databse to fetch current available seats
    return this.http.post(
      `https://stackblitzstartersw9fjn5-lt5b--3010--c53ab388.local-credentialless.webcontainer.io/`,
      data
    );
  }

  getUsersTickets(emailId) {
    // call databse to fetch current available seats
    return this.http.get(
      `https://stackblitzstartersw9fjn5-lt5b--3010--c53ab388.local-credentialless.webcontainer.io/`
    );
  }
}
