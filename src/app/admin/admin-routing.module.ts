import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { GymComponent } from './gym/gym.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';

const routes: Routes = [
  {path:"", component:LandingComponent,
    children:[
      {path:"",component:DashboardComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"admin",component:AdminComponent},
      {path:"gyms",component:GymComponent},
      {path:"paymentmode",component:PaymentmodeComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
