import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PopularDestinationsComponent } from './main/popular-destinations/popular-destinations.component';
import { PopularCardComponent } from './main/popular-destinations/popular-card/popular-card.component';
import { TripHelperComponent } from './trip-helper/trip-helper.component';
import { SpecialOffersComponent } from './main/special-offers/special-offers.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { MainTicketsComponent } from './main/main-tickets/main-tickets.component';
import { HelperComponent } from './main/helper/helper.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
