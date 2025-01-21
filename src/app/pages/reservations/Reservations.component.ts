import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Observable } from "rxjs";
import { Reservations } from "src/api/models/Reservatios";
import { ReservationsServices } from "src/services/reservatios.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: 'Reservations.component.html',
    styleUrls: ['Reservations.component.css']
})
export class ReservationsComponent implements OnInit {

    reservas: Reservations[] = [];
    constructor(private ReservationsServices: ReservationsServices) {
        let ReservationsObservable: Observable<Reservations[]>
        ReservationsObservable = ReservationsServices.getAll();
        ReservationsObservable.subscribe((serverResp => {
            this.reservas = serverResp;
        }))
    }


    ngOnInit(): void { }



}