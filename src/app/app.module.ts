import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from 'app.component';

import { ReservationsComponent } from './pages/reservations/Reservations.component';
import { welcome } from './pages/welcome/welcome.component';


@NgModule({
    declarations: [
        // AppComponent,
        // ReservationsComponent,
        // welcome
    ],
    imports: [
        HttpClientModule,


    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }

