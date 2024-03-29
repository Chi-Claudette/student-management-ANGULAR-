import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentComponent} from "./student/student.component";
import {AdminComponent} from "./admin/admin.component";
import {VpsComponent} from "./vps/vps.component";
import {VesComponent} from "./ves/ves.component";
import {MesComponent} from "./mes/mes.component";
import {VsComponent} from "./mes/vs/vs.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'db', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'student', component: StudentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'vps', component: VpsComponent, canActivate: [AuthGuard]},
  {path: 'ves', component: VesComponent, canActivate: [AuthGuard]},
  {path: 'mes', component: MesComponent, canActivate: [AuthGuard]},
  {path: 'mes/:id', component: VsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
