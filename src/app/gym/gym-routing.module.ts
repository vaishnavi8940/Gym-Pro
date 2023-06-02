import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GymsComponent } from './gyms/gyms.component';
import { BatchmasterComponent } from './batchmaster/batchmaster.component';
import { TrainermasterComponent } from './trainermaster/trainermaster.component';
import { PlansmasterComponent } from './plansmaster/plansmaster.component';
import { MembersComponent } from './members/members.component';
import { MemberplansComponent } from './memberplans/memberplans.component';
import { MemberpaymentsComponent } from './memberpayments/memberpayments.component';

const routes: Routes = [
  {path:"", component:LandingComponent,
  children:[
    {path:"",component:DashboardComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"gym",component:GymsComponent},
    {path:"batch",component:BatchmasterComponent},
    {path:"trainer",component:TrainermasterComponent},
    {path:"plans",component:PlansmasterComponent},
    {path:"members",component:MembersComponent},
    {path:"memberplans",component:MemberplansComponent},
    {path:"memberpayments",component:MemberpaymentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
