import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketRaise } from '../ticket-raise';

@Component({
  selector: 'app-ticketdetails',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './ticketdetails.component.html',
  styleUrl: './ticketdetails.component.css'
})
export class TicketdetailsComponent {


  ticket: TicketRaise | null = null; // Variable to hold the fetched ticket details
  ticketId: number = 0; // Store the ticket ID

  // API URL to fetch ticket details (modify as per your API)
  url: string = 'http://localhost:8080/ticketDetails'; 

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router:Router

  ) {}

  ngOnInit(): void {
    // Get the ticketId from the URL parameters
    this.route.params.subscribe(params => {
      this.ticketId = +params['ticketId']; // Convert the ticketId to a number
      this.getTicketDetails(); // Fetch the ticket details
    });
  
  }

  // Fetch ticket details from the API
  getTicketDetails() {
    this.http.get<TicketRaise>(`${this.url}/${this.ticketId}`).subscribe(
      (data) => {
        console.log("Fetched Ticket Bhosale:", data);
        this.ticket = data; // Set the fetched ticket data
      },
      (error) => {
        console.error('Error fetching ticket details:', error);
      }
    );
  }
  navigatetodashboard(ticketRaiseId?: number): void {
    if (ticketRaiseId) {
      console.log('Navigating to dashboard with Ticket ID:', ticketRaiseId);
      this.router.navigate(['/app-dashboard', ticketRaiseId]);
    } else {
      console.error('Ticket ID is undefined!');
    }
  }
  
  navigatetoreject(){
    alert("Position Rejected!!!")
    
    this.router.navigate(['/app-home']);
  }
  
  navigatedisplay () {
    this.router.navigate(['/app-home']);
  }
  navigatedisplaydash(){
    this.router.navigate(['/app-dashboard']);
  }
}
