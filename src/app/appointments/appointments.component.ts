import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentsService } from '../Services/appointments.service';
import { Router, RouterEvent, RouterLink, RouterModule } from '@angular/router';
import { BookedComponent } from '../booked/booked.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [FormsModule,
            RouterModule,
            RouterLink,
            BookedComponent,
            MatFormFieldModule, 
            MatInputModule, 
            MatDatepickerModule,
            MatSelectModule
            ]
            ,
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
  providers:[provideNativeDateAdapter()]
})
export class AppointmentsComponent {
  id: null | number = null;
  Name: string = '';
  ContactInfo = '';
  SelectService: null | number = null;
  Description: string = '';
  Date: null | Date = null;
  
  
  constructor(
    private appointmentService: AppointmentsService,
    private router: Router
  ){}

  
  submitAppointment(){
    
    const newAppointment = {
      Name: this.Name,
      ContactInfo: this.ContactInfo,
      SelectService: this.SelectService,
      Description: this.Description,
      Date: this.Date
    }
      this.appointmentService.postAppointment(newAppointment).subscribe(() => {
        this.router.navigate(['booked']);
        
      });
    }
  }
  



