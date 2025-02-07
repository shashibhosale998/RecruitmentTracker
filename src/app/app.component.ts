import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginuserComponent } from "./loginuser/loginuser.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recruitmenttracker';


  constructor(private http: HttpClient, private router: Router) {
    
  }

  
  navigatedisplay () {
    this.router.navigate(['/app-home']);
  }
  navigatedisplaydash(){
    this.router.navigate(['/app-dashboard']);
  }

}
