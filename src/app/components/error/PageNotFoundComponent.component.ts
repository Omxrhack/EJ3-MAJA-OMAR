import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: 'PageNotFoundComponent.component.html',
    styleUrls: ['PageNotFoundComponent.component.css']
})
export default class PageNotFoundComponent {

}