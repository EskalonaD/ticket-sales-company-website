import { MainTicketService } from './main/main-tickets/main-tickets.service';
import { SearchService } from './main/search.service';
import { SpecialOfferComponent } from './main/main-gallery/special-offers/special-offer/special-offer.component';
import { TicketComponent } from './main/main-tickets/ticket/ticket.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { PopularDestinationsComponent } from './main/main-gallery/popular-destinations/popular-destinations.component';
import { PopularCardComponent } from './main/main-gallery/popular-destinations/popular-card/popular-card.component';
import { TripHelperComponent } from './trip-helper/trip-helper.component';
import { SpecialOffersComponent } from './main/main-gallery/special-offers/special-offers.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { MainTicketsComponent } from './main/main-tickets/main-tickets.component';
import { HelperComponent } from './main/main-gallery/helper/helper.component';
import { MainGalleryComponent } from './main/main-gallery/main-gallery.component';
import { MainSearchComponent } from './main/main-search/main-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MainTicketBookingComponent } from './main/main-ticket-booking/main-ticket-booking.component';
import { PassengersFormComponent } from './main/main-ticket-booking/passengers-form/passengers-form.component';
import { CardInfoComponent } from './main/main-ticket-booking/card-info/card-info.component';
import { BookedTicketComponent } from './main/main-ticket-booking/booked-ticket/booked-ticket.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PopularDestinationsComponent,
    PopularCardComponent,
    TripHelperComponent,
    SpecialOffersComponent,
    MyTripsComponent,
    MainTicketsComponent,
    HelperComponent,
    MainGalleryComponent,
    MainSearchComponent,
    SpecialOfferComponent,
    TicketComponent,
    MainTicketBookingComponent,
    PassengersFormComponent,
    CardInfoComponent,
    BookedTicketComponent,
    AuthorizationComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxDaterangepickerMd.forRoot(),
    Ng5SliderModule
  ],
  providers: [SearchService, MainTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }