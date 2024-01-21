import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { CoursesComponent } from './client/courses/courses/courses.component';
import { AboutComponent } from './client/about/about.component';
import { CourseDetailsComponent } from './client/courses/course-details/course-details.component';
import { EnrollCourseComponent } from './client/courses/enroll-course/enroll-course.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactComponent } from './client/contact/contact.component';
import { SidebarComponent } from './admin/layout/sidebar/sidebar.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AssistantsMainComponent } from './admin/content/assistants/assistants-main/assistants-main.component';
import { CompaniesMainComponent } from './admin/content/companies/companies-main/companies-main.component';
import { MainContentComponent } from './admin/content/main/main-content/main-content.component';
import { TrainersMainComponent } from './admin/content/trainers/trainers-main/trainers-main.component';
import { TagsInputComponent } from './material-components/tags-input/tags-input.component';
import { MatChipsModule } from '@angular/material/chips';
import { TrainersFormComponent } from './admin/content/trainers/trainers-form/trainers-form.component';
import { MatTableModule } from '@angular/material/table';
import { TrainersTableComponent } from './material-components/tables/trainers-table/trainers-table.component';
import { LoaderComponent } from './material-components/loader/loader.component';
import { ParticipantComponent } from './admin/content/participants/participant/participant.component';
import { Interceptor } from './inteceptors';
import { CompaniesFormComponent } from './admin/content/companies/companies-form/companies-form.component';
import { CompaniesTableComponent } from './material-components/tables/companies-table/companies-table.component';
import { AssistantsTableComponent } from './material-components/tables/assistants-table/assistants-table.component';
import { AssistantsFormComponent } from './admin/content/assistants/assistants-form/assistants-form.component';
import { CoursesFormComponent } from './admin/content/courses/courses-form/courses-form.component';
import { CoursesMainComponent } from './admin/content/courses/courses-main/courses-main.component';
import { CoursesTableComponent } from './material-components/tables/courses-table/courses-table.component';
import { TrainerProfileComponent } from './admin/content/trainers/trainer-profile/trainer-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CoursesComponent,
    AboutComponent,
    CourseDetailsComponent,
    EnrollCourseComponent,
    ContactComponent,
    LayoutComponent,
    SidebarComponent,
    MainContentComponent,
    AssistantsMainComponent,
    CompaniesMainComponent,
    TrainersMainComponent,
    TagsInputComponent,
    TrainersFormComponent,
    TrainersTableComponent,
    LoaderComponent,
    ParticipantComponent,
    CompaniesFormComponent,
    CompaniesTableComponent,
    AssistantsTableComponent,
    AssistantsFormComponent,
    CoursesTableComponent,
    CoursesFormComponent,
    CoursesMainComponent,
    TrainerProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
