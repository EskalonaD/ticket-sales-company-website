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
import { DateRangePickerModule } from 'projects/uiowa/date-range-picker/src/public-api';
import { FormsModule } from '@angular/forms';
import { SpecialOfferComponent } from './main/main-gallery/special-offers/special-offer/special-offer.component';
import { TicketComponent } from './main/main-tickets/ticket/ticket.component';

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
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    NgbModule,
 DateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }