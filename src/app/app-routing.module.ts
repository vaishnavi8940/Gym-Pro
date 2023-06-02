import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"adminlogin", component:AdminLoginComponent},
  {path:"admin", loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"gym", loadChildren:()=>import('./gym/gym.module').then(m=>m.GymModule)},
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
