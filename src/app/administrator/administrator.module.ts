import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorDashboardComponent } from './administrator-dashboard/administrator-dashboard.component';
import { AdministratorRoutingModule } from './administrator-routing.module';



@NgModule({
  declarations: [
    AdministratorDashboardComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ]
})
export class AdministratorModule { }
