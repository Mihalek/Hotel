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
import { RoomService } from './_services/room.service';
import { HttpClientModule } from '@angular/common/http'

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
    SearchroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule
    
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }