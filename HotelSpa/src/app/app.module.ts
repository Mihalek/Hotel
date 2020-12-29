import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { FormtocontactComponent} from './formtocontact/formtocontact.component';
import { AddressComponent } from './address/address.component';
import { ReserveroomComponent } from './reserveroom/reserveroom.component';
import { SearchroomComponent } from './searchroom/searchroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { RoomService } from './_services/room.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { AcceptreserveComponent } from './acceptreserve/acceptreserve.component';
import { ReservationslistComponent } from './reservationslist/reservationslist.component';
import { MatTableModule} from '@angular/material/table'
import { AdminreservationslistComponent } from './adminreservationslist/adminreservationslist.component';
import { AdminmessagesComponent } from './adminmessages/adminmessages.component';
import { AdminuserslistComponent } from './adminuserslist/adminuserslist.component';
import { MatPaginatorModule} from '@angular/material/paginator'
import { ChangeroleComponent } from './changerole/changerole.component';
import { SettingsComponent } from './settings/settings.component';
import { UserService } from './_services/user.service';
import { AlertifyService } from './_services/alertify.service';
import { MessageService } from './_services/message.service';
import { ReservationService } from './_services/reservation.service';
import { RoleGuard } from './_guards/role.guard';

@NgModule({
  declarations: [								
    AppComponent,
    NavComponent,
    RegisterComponent,
    FooterComponent,
    ServicesComponent,
    RoomsComponent,
    ContactComponent,
    GooglemapComponent,
    FormtocontactComponent,
    AddressComponent,
    ReserveroomComponent,
    SearchroomComponent,
    AcceptreserveComponent,
    ReservationslistComponent,
      AdminreservationslistComponent,
      AdminmessagesComponent,
      AdminuserslistComponent,
      ChangeroleComponent,
      SettingsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    RoomService,
    AuthService, 
    AuthGuard,
    UserService,
    AlertifyService,
    MessageService,
    ReservationService,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
