import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:5084/api/rooms'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getRoomById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addRoom(room: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, room);
  }

  updateRoom(id: number, room: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, room);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
