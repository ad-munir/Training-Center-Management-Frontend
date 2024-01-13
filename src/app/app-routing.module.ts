import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { CoursesComponent } from './client/courses/courses/courses.component';
import { AboutComponent } from './client/about/about.component';
import { CourseDetailsComponent } from './client/courses/course-details/course-details.component';
import { ContactComponent } from './client/contact/contact.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { MainContentComponent } from './admin/layout/main-content/main-content.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'calender', component: CalendarComponent },

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: LayoutComponent },
  { path: 'main', component: MainContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
