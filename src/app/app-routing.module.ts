import { CardInfoComponent } from './main/main-ticket-booking/card-info/card-info.component';
import { PassengersFormComponent } from './main/main-ticket-booking/passengers-form/passengers-form.component';
import { MainTicketBookingComponent } from './main/main-ticket-booking/main-ticket-booking.component';
import { MainGalleryComponent } from './main/main-gallery/main-gallery.component';
import { MainTicketsComponent } from './main/main-tickets/main-tickets.component';
import { TripHelperComponent } from './trip-helper/trip-helper.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoute: Routes = [
    { path: '', redirectTo: '/flights/gallery', pathMatch: "full" },
    {
        path: 'flights', component: MainComponent, children: [
            { path: 'gallery', component: MainGalleryComponent },
            {
                path: 'tickets', component: MainTicketsComponent
            },
            {
                path: 'ticket', component: MainTicketBookingComponent, children: [
                    { path: 'passengers-form', component: PassengersFormComponent },
                    { path: 'card-info', component: CardInfoComponent }
                ]
            },



        ]
    },
    { path: 'my-trips', component: MyTripsComponent },
    { path: 'trip-helper', component: TripHelperComponent }
]



@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule { }