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
import { ParticipantComponent } from './admin/content/participants/participant/participant.component';
import { CompaniesFormComponent } from './admin/content/companies/companies-form/companies-form.component';
import { AssistantsFormComponent } from './admin/content/assistants/assistants-form/assistants-form.component';
import { CoursesMainComponent } from './admin/content/courses/courses-main/courses-main.component';
import { CoursesFormComponent } from './admin/content/courses/courses-form/courses-form.component';
import { EnrollCourseComponent } from './client/courses/enroll-course/enroll-course.component';
import { GuardAuthService } from './services/guard-auth.service';
import { TrainerProfileComponent } from './admin/content/trainers/trainer-profile/trainer-profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data/courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'enroll-course/:id', component: EnrollCourseComponent },
  { path: 'participants', component: ParticipantComponent },
  
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [GuardAuthService] // Apply the guard to protect access to the Dashboard component
  },
  { path: 'main', component: MainContentComponent },


  { path: 'courses/all', component: CoursesMainComponent },
  { path: 'courses', component: CoursesFormComponent },



  { path: 'trainers/all', component: TrainersMainComponent },
  { path: 'trainers', component: TrainersFormComponent },
  { path: 'trainer-profile/:id', component: TrainerProfileComponent },


  { path: 'assistants/all', component: AssistantsMainComponent },
  { path: 'assistants', component: AssistantsFormComponent },


  { path: 'companies/all', component: CompaniesMainComponent },
  { path: 'companies', component: CompaniesFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
