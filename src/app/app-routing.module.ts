import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AdministratorModule } from './administrator/administrator.module';
import { TeacherRoutingModule } from './teacher/teacher-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';

const routes: Routes = [
  { path: '', loadChildren: () => AuthModule },
  { path: 'administrator', loadChildren: () => AdministratorModule },
  { path: 'teacher', loadChildren: () => TeacherRoutingModule },
  { path: 'student', loadChildren: () => StudentRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
