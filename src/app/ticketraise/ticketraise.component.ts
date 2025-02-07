import { Component } from '@angular/core';
import { TicketRaise } from '../ticket-raise';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticketraise',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './ticketraise.component.html',
  styleUrl: './ticketraise.component.css'
})
export class TicketraiseComponent {

  url: string = "http://localhost:8080/Ticket";
  ticketRaise:TicketRaise=new TicketRaise();
  
    constructor(private http: HttpClient, private router: Router) {}
  
    onSubmit(ticketForm: any) {
      if (ticketForm.valid) {
        this.http.post<TicketRaise>(this.url, this.ticketRaise, { responseType: 'json' }).subscribe(
          (response: any) => {
            console.log(response);
            alert('Request has been reach!');
            // Navigate to app-home
            
           
          },
          (error: any) => {
            console.error(error);
            alert('Request not be generate.');
          }
        );
      } else {
        alert('Error .');
      }
    }
}
