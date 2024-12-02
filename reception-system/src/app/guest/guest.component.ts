import { Component, OnInit } from '@angular/core';
import { GuestService } from '../Models/services/guest.service'; // Adjust the path if needed
import { Guest } from '../Models/guest'; // Adjust the path if needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest',
  standalone: true,
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  imports: [CommonModule]
})
export class GuestComponent implements OnInit {
  guests: Guest[] = [];

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.fetchGuests();
  }

  fetchGuests(): void {
    this.guestService.getGuests().subscribe(
      (data) => {
        this.guests = data;
      },
      (error) => {
        console.error('Error fetching guests:', error);
      }
    );
  }
}
