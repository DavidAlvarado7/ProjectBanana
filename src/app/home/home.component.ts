import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { AppointmentsService } from '../Services/appointments.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTreeModule,
            MatButtonModule, 
            MatIconModule, 
            MatCardModule,
            MatDividerModule,
            MatButtonModule,
            MatProgressBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private appointmentService: AppointmentsService){

  }
  
  Lashes = `get them lashes done girl, and all that other good stuff with this 
  ultimate service`;
  fills = `you get them lashes filled from the other stuff. Perfect
  for bichonas and locas`

  selectedService(id: number){
    console.log(id);
    this.router.navigate(['appointments', id])}


}
