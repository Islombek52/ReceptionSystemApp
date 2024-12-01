import { Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';

export const routes: Routes = [
  { path: 'guests', component: GuestComponent },
  { path: 'rooms', component: RoomComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: '', redirectTo: '/guests', pathMatch: 'full' }, // Default route
];
