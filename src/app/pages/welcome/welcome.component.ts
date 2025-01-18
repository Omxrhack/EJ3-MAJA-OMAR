import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export default class welcome {

}
