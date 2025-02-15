import { Routes } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { HomeComponent } from './home/home.component';
import { TicketraiseComponent } from './ticketraise/ticketraise.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { StatusComponent } from './status/status.component';
import { LopageComponent } from './lopage/lopage.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';

export const routes: Routes = [
 { path: '', component: LoginuserComponent }, // Default route (login)
  
  // { path: '', component: DashboardComponent },

    { path: 'app-dashboard/:ticketRaiseId', component: DashboardComponent },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-home', component: HomeComponent }, // Home page
  { path: 'app-ticketraise', component: TicketraiseComponent },
  { path: 'app-status/:ticketId', component: StatusComponent },
  { path: 'app-lopage', component: LopageComponent },
  { path: 'app-addcandidate', component:  AddcandidateComponent},
  { path: 'app-ticketdetails/:ticketId', component: TicketdetailsComponent }, 
  // { path: 'app-ticketdetails', component: TicketdetailsComponent },
  { path: '**', redirectTo: '' }, // Redirect invalid URLs to the login page
];

