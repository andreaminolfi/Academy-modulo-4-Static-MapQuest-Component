import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  zoom: number = 5;
  locations: string[] = ['Cuneo', 'Torino', 'Milano'];
}
