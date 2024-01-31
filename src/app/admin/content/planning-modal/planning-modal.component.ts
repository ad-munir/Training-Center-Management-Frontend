import { CalendarService } from 'src/app/services/calendar.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { Schedule } from 'src/app/models/schedule.model';
import { CourseService } from 'src/app/services/course.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-planning-modal',
  templateUrl: './planning-modal.component.html',
  styleUrls: ['./planning-modal.component.css'],
})
export class PlanningModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PlanningModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private courseService: CourseService,
    private router: Router,
    private calendarService: CalendarService,
    private toast: ToastService
  ) {}

  selectedCourseId: any;
  courseControl = new FormControl();

  ngOnInit(): void {
    this.getCourses();
  }

  courses!: Course[];


  getCourses(): void {
    this.courseService.getCourses().subscribe(
      (data: Course[]) => {
        console.log('fetch Courses:', data);

        this.courses = data;

      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  onSubmit() {

    console.log(this.selectedCourseId);


    if(this.selectedCourseId) {

      const schedule: Schedule = {
        startDate: new Date(this.data.start),
        endDate: new Date(this.data.end),
        courseId: this.selectedCourseId,
        course: null
      };

      this.calendarService.saveSchedule(schedule).subscribe(
        (savedSchedule) => {
          console.log('Schedule saved:', savedSchedule);
          this.dialogRef.close();
          this.router.navigate(['/dashboard'])
          this.toast.showSuccess('Schedule saved')
        },
        (error) => {
          console.error('Error saving schedule:', error);
          this.toast.showError('Error saving schedule')
        }
      );

    }else {
      this.toast.showWarn('Please select a course')
    }


  }


  onCancel(){
    this.dialogRef.close();
  }
}
