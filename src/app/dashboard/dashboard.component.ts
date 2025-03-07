import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketRaise } from '../ticket-raise';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url: string = "http://localhost:8080/count"; // API for ticket count
  ticketCount: number = 0;
  ticketurl: string = "http://localhost:8080/ticketDetails"; // Base API for ticket details

  ticket: TicketRaise = new TicketRaise(); // Store the current ticket object
  ticketRaiseId: number | undefined;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the ticket ID from URL params
    this.getCount();
    this.route.paramMap.subscribe(params => {
      const ticketRaiseId = params.get('ticketRaiseId');
      if (ticketRaiseId) {
        this.ticketRaiseId = +ticketRaiseId; // Convert to number
        this.fetchTicketDetails(); // Fetch new ticket details
      }
    });
  }

  // Fetch ticket details using ticket ID
  fetchTicketDetails(): void {
    // Fetch the new ticket and replace the existing ticket object
    this.http.get<TicketRaise>(`${this.ticketurl}/${this.ticketRaiseId}`).subscribe(
      (data: TicketRaise) => {
        this.ticket = data; // Assign new ticket data
        console.log("Fetched Ticket Details:", this.ticket);
      },
      (error: any) => {
        console.error('Error fetching ticket details:', error);
      }
    );
  }

  getCount(): void {
    this.http.get<number>(this.url).subscribe(
      data => {
        this.ticketCount = data;
        console.log('Ticket Count:', this.ticketCount);
      },
      error => {
        console.error('Error fetching ticket count:', error);
      }
    );
  }

  // Navigation functions
  navigatedisplay(): void {
    this.router.navigate(['/app-home']);
  }

  navigatedisplaydash(): void {
    this.router.navigate(['/app-dashboard']);
  }

  getRoundClass(index: number): string {
    const classes = [
      'bg-green-100 text-green-800 hover:bg-green-200', // L0
      'bg-yellow-100 text-yellow-800 hover:bg-yellow-200', // L1
      'bg-blue-100 text-blue-800 hover:bg-blue-200', // L2
      'bg-gray-100 text-gray-800 hover:bg-gray-200', // L3
      'bg-red-100 text-red-800 hover:bg-red-200' // L4
    ];
    return classes[index];
  }

  getProgress(): number {
    return this.ticket ? Math.min(100, Math.max(0, Math.floor(Math.random() * 100))) : 0;
  }

  navigate(): void {
    this.router.navigate(['/app-home']);
  }

  onRoundClick(round: string) {
    console.log(`Button clicked: ${round}`);
    // You can perform any additional actions like navigation or displaying messages here.
  }
  onRoundClicklo(){
    this.router.navigate(['/app-lopage']);
  }
}
