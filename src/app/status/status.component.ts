import { Component } from '@angular/core';
import { TicketRaise } from '../ticket-raise';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  ticket: TicketRaise = new TicketRaise();
  ticketId!: number; // Current ticket ID
  previousTicketId: number | null = null; // Store previous ticket ID
  ticketurl: string = "http://localhost:8080/ticketDetails";  // API for ticket details

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Clear previous ticket details when component initializes
    this.ticket = new TicketRaise();

    // Get the ticket ID from URL params
    this.route.paramMap.subscribe(params => {
      const id = params.get('ticketId');
      if (id) {
        this.ticketId = +id; // Convert to number
        if (this.previousTicketId !== this.ticketId) {
          this.previousTicketId = this.ticketId; // Update previous ticket ID
          this.fetchTicketDetails(); // Fetch new ticket details
        }
      }
    });
  }

  // Fetch ticket details using ticket ID
  fetchTicketDetails(): void {
    this.http.get<TicketRaise>(`${this.ticketurl}/${this.ticketId}`).subscribe(
      (data: TicketRaise) => {
        this.ticket = data; // Assign new ticket data
        console.log("Fetched Ticket Details:", this.ticket);
      },
      (error: any) => {
        console.error('Error fetching ticket details:', error);
      }
    );
  }

  // Navigate to reject page
  navigatetoreject() {
    alert("Position Rejected!");
    this.router.navigate(['/app-home']);
  }

  // Navigate to dashboard
  navigatetodashboard(ticketRaiseId: number) {
    if (ticketRaiseId !== undefined) {
      this.router.navigate(['/app-dashboard', ticketRaiseId]);
    } else {
      console.error('Ticket ID is undefined!');
    }
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
}
