import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { DanceacademyComponent } from './danceacademy/danceacademy.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { AddchoreographerComponent } from './addchoreographer/addchoreographer.component';
import { ShowchoreographerComponent } from './showchoreographer/showchoreographer.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
import { EditchoreographersComponent } from './editchoreographers/editchoreographers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from './angular-material.module';
import { MatButtonModule } from '@angular/material';
import { AdminbooingsComponent } from './adminbooings/adminbooings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    UserregistrationComponent,
    DanceacademyComponent,
    AddComponent,
    AddchoreographerComponent,
    ShowchoreographerComponent,
    ShowbookingsComponent,
    EditchoreographersComponent,
    AdminbooingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
