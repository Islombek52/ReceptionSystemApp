import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { GuestComponent } from './app/guest/guest.component';
import { RoomComponent } from './app/room/room.component';
import { UserComponent } from './app/user/user.component';
import { ReservationComponent } from './app/reservation/reservation.component';

// Define application routes
const routes: Routes = [
  { path: 'guests', component: GuestComponent },
  { path: 'rooms', component: RoomComponent },
  { path: 'users', component: UserComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: '', redirectTo: '/guests', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/guests' }, // Wildcard route
];

// Bootstrap the application with routing
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provides HttpClient
    provideRouter(routes), // Provides routes for navigation
  ],
}).catch((err) => console.error(err));
