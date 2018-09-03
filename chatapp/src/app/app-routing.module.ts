import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SadminComponent } from './sadmin/sadmin.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'home', component: LoginComponent},
  /* for empty path */
  {path:'', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'superadmindash', component: SadminComponent},
  {path:'admindash', component: AdminComponent},
  {path:'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
