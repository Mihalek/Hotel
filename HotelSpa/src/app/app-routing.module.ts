import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminreservationslistComponent } from './adminreservationslist/adminreservationslist.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ReservationslistComponent } from './reservationslist/reservationslist.component';
import { ReserveroomComponent } from './reserveroom/reserveroom.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '' , pathMatch: 'full' , redirectTo: 'register'},
  {path: 'reservations', component: ReservationslistComponent, canActivate: [AuthGuard]},
  {path: 'register' , component: RegisterComponent},
  {path: 'rooms' , component: RoomsComponent},
  {path: 'services' , component: ServicesComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'reservationsmanage' , component: AdminreservationslistComponent},
  {path: 'reserveroom' , component: ReserveroomComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
