import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BoodbankapiService } from './boodbankapi.service';
import { ShowDonarComponent } from './show-donar/show-donar.component';
import { FindDonarComponent } from './find-donar/find-donar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { ShowHospitalComponent } from './show-hospital/show-hospital.component';
import { CampdetailsComponent } from './campdetails/campdetails.component';
import { PastCampComponent } from './past-camp/past-camp.component';
import { FutureCampsComponent } from './future-camps/future-camps.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LocationListComponent } from './location-list/location-list.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { FilterPipe } from './filter.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShowDonarComponent,
    FindDonarComponent,
    MenuComponent,
    SearchHospitalComponent,
    ShowHospitalComponent,
    CampdetailsComponent,
    PastCampComponent,
    FutureCampsComponent,
    LoginComponent,
    LogoutComponent,
    LocationListComponent,
    ManageRequestComponent,
    FilterPipe,
    LifecycleComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [LocationListComponent],
  // bootstrap: [LifecycleComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
