import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Appointments, SubmitAppointments } from '../Interfaces/appointments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = `${environment.apiDomain}/api/Appointment`
  postAppointment(newSubmission: SubmitAppointments): Observable<Appointments>{
    return this.httpClient.post<Appointments>(this.baseUrl, newSubmission); }
  
 
  }

  
 


