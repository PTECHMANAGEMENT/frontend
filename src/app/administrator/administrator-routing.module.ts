import { RouterModule, Routes } from "@angular/router";
import { AdministratorDashboardComponent } from "./administrator-dashboard/administrator-dashboard.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: AdministratorDashboardComponent },
    { path: 'dashboard', component: AdministratorDashboardComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule { }