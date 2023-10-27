import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProductsComponent } from "./components/list-products/list-products.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    providers: [],
    imports: [
        RouterOutlet,
        ListProductsComponent
    ]
})
export class AppComponent {
  title = 'curso_angular';
}
