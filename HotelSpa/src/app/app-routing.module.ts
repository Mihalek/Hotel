import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminmessagesComponent } from './adminmessages/adminmessages.component';
import { AdminreservationslistComponent } from './adminreservationslist/adminreservationslist.component';
import { AdminuserslistComponent } from './adminuserslist/adminuserslist.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ReservationslistComponent } from './reservationslist/reservationslist.component';
import { ReserveroomComponent } from './reserveroom/reserveroom.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';
import { AuthGuard } from './_guards/auth.guard';
import { RoleGuard } from './_guards/role.guard';

const routes: Routes = [
  {path: '' , pathMatch: 'full' , redirectTo: 'register'},
  {path: 'reservations', component: ReservationslistComponent, canActivate: [AuthGuard]},
  {path: 'register' , component: RegisterComponent},
  {path: 'rooms' , component: RoomsComponent},
  {path: 'services' , component: ServicesComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'reservationsmanage' , component: AdminreservationslistComponent, canActivate: [RoleGuard]},
  {path: 'messages' , component: AdminmessagesComponent, canActivate: [RoleGuard]},
  {path: 'allusers' , component: AdminuserslistComponent, canActivate: [RoleGuard]},
  {path: 'reserveroom' , component: ReserveroomComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
