import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ReserveroomComponent } from './reserveroom/reserveroom.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '' , pathMatch: 'full' , redirectTo: 'register'},
  {path: 'register' , component: RegisterComponent},
  {path: 'rooms' , component: RoomsComponent},
  {path: 'services' , component: ServicesComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'reserveroom' , component: ReserveroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
