import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { CoursesComponent } from './client/courses/courses/courses.component';
import { AboutComponent } from './client/about/about.component';
import { CourseDetailsComponent } from './client/courses/course-details/course-details.component';
import { ContactComponent } from './client/contact/contact.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { MainContentComponent } from './admin/content/main/main-content/main-content.component';
import { AssistantsMainComponent } from './admin/content/assistants/assistants-main/assistants-main.component';
import { CompaniesMainComponent } from './admin/content/companies/companies-main/companies-main.component';
import { TrainersMainComponent } from './admin/content/trainers/trainers-main/trainers-main.component';
import { TrainersFormComponent } from './admin/content/trainers/trainers-form/trainers-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course-details', component: CourseDetailsComponent },



  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: LayoutComponent },
  { path: 'main', component: MainContentComponent },



  { path: 'assistants', component: AssistantsMainComponent },
  { path: 'companies', component: CompaniesMainComponent },

  { path: 'trainers/all', component: TrainersMainComponent },
  { path: 'trainers', component: TrainersFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
