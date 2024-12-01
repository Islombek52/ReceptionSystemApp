import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../guest'; // Corrected import path

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private apiUrl = 'https://localhost:5084/api/guests'; // Ensure this API URL is correct

  constructor(private http: HttpClient) {}

  // Fetch all guests
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl);
  }

  // Add a new guest
  addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiUrl, guest);
  }
}
