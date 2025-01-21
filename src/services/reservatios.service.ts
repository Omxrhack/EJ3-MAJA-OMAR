import { HttpClient } from "@angular/common/http";
import { Inject } from "@angular/core";
import { Observable } from "rxjs";
import { RERSERVAS_BY_ID_URL, RERSERVAS_URL } from "src/api/constants/urls";
import { Reservations } from "src/api/models/Reservatios";

@Inject({
    providedIn: 'root'
})
export class ReservationsServices {
    constructor(private http: HttpClient) { }


    getAll(): Observable<Reservations[]> {
        return this.http.get<Reservations[]>(RERSERVAS_URL);
    }
    getReservasId(reserID: string): Observable<Reservations> {
        return this.http.get<Reservations>(RERSERVAS_BY_ID_URL + reserID)
    }
}