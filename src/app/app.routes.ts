import { Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookedComponent } from './booked/booked.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{  
    path: '', redirectTo: '/home', pathMatch: 'full'

},
{
    path: 'appointments',
    component: AppointmentsComponent
},
{
    path: 'booked',
    component: BookedComponent
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'appointments/:id',
    component: AppointmentsComponent
}
];
