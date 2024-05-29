import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookedComponent } from './booked/booked.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppointmentsComponent,BookedComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectBananaFront';
}
