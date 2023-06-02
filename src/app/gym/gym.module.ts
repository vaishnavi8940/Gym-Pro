import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GymsComponent } from './gyms/gyms.component';
import { HttpClientModule } from '@angular/common/http';
import { PlansmasterComponent } from './plansmaster/plansmaster.component';
import { TrainermasterComponent } from './trainermaster/trainermaster.component';
import { BatchmasterComponent } from './batchmaster/batchmaster.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    DashboardComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GymsComponent,
    PlansmasterComponent,
    TrainermasterComponent,
    BatchmasterComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class GymModule { }
