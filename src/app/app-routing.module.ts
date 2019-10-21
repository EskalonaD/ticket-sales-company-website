import { MainTicketsComponent } from './main/main-tickets/main-tickets.component';
import { TripHelperComponent } from './trip-helper/trip-helper.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoute: Routes = [
    { path: '', redirectTo: '/flights', pathMatch: "full" },
    {
        path: 'flights', component: MainComponent, children: [
            { path: 'tickets', component: MainTicketsComponent }
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