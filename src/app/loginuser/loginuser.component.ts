import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Users } from '../users';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketRaise } from '../ticket-raise';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {
  url: string = "http://localhost:8080/Verify";
  user: Users = new Users();
  ticketRaise: TicketRaise = new TicketRaise();

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      // Call the backend API for user verification
      this.http.post<any>(this.url, this.user, { responseType: 'json' }).subscribe(
        (response: any) => {
          console.log(response);
          alert(response.message); // Backend response message

          // Assuming the backend sends the user role, you can directly access it
          if (response.role === "HR") {
            
           
            this.router.navigate(['/app-dashboard']);

          } else if (response.role === "CRM") {
            this.router.navigate(['/app-ticketraise']);
          } else {
            alert('Invalid role!');
          }
        },
        (error: any) => {
          console.error(error);
          alert('Invalid user credentials or an error occurred.');
        }
      );
    } else {
      alert('Invalid form data. Please fill all fields.');
    }
  }
}
function getcount() {
  throw new Error('Function not implemented.');
}

