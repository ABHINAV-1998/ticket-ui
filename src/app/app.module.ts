import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { TicketBookingService } from './ticket-booking.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NzFormModule } from 'ng-zorro-antd';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NzTableModule,
    NzFormModule
  ],
  providers: [TicketBookingService, HttpClient],
  declarations: [AppComponent, HelloComponent, TicketBookingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
