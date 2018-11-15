import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FindDonarComponent } from './find-donar/find-donar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CampdetailsComponent } from './campdetails/campdetails.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { ShowDonarComponent } from './show-donar/show-donar.component';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { UniversalGuardGuard } from './universal-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'findDonar', component: FindDonarComponent },
  { path: 'showDonar', component: ShowDonarComponent },
  { path: 'showDonar/:id', component: ShowDonarComponent, canDeactivate: [UniversalGuardGuard] },
  { path: 'showHospital', component: SearchHospitalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'camps', component: CampdetailsComponent },
  { path: 'request', component: ManageRequestComponent, canActivate: [UniversalGuardGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
