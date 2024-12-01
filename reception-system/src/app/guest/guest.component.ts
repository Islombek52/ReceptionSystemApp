import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guest',
  standalone: true,  // This makes the component standalone
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  imports: [HttpClientModule]  // Add HttpClientModule to the imports array
})
export class GuestComponent implements OnInit {
  guests: any[] = []; // Array to store guest data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchGuests(); // Fetch guests when the component is initialized
  }

  fetchGuests(): void {
    const apiUrl = 'http://localhost:5000/api/guests'; // Adjust to match your API endpoint
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.guests = data; // Assign fetched data to the guests array
      },
      (error) => {
        console.error('Error fetching guests:', error);
      }
    );
  }
}
