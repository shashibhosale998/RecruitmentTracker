import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketRaise } from '../ticket-raise';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = "http://localhost:8080/allTickets"; 
  tickets: TicketRaise[] = []; // Changed from 'ticket' to 'tickets'

  constructor(private http: HttpClient, private router: Router) {}

  // This is the ngOnInit lifecycle hook where we call the API automatically when the component initializes
  ngOnInit(): void {
    this.getallTicket(); // Automatically fetch tickets when the component is initialized
  }

  navigateToDetails(ticketId: number) {
    this.router.navigate(['/app-ticketdetails', ticketId]);
  }

  getallTicket() {
    this.http.get<TicketRaise[]>(this.url).subscribe(
      (data) => {
        console.log("Fetched Tickets:", data);
        this.tickets = data; // Change 'ticket' to 'tickets'
      },
      (error) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }
  
  navigatedisplay () {
    this.router.navigate(['/app-home']);
  }
  navigatedisplaydash(){
    this.router.navigate(['/app-dashboard']);
  }
  
}
