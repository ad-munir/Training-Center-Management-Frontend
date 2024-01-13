import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnrollCourseComponent } from '../enroll-course/enroll-course.component';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: [
    './course-details.component.css',
    '../../../css/bootstrap.min.css',
    '../../../css/animate.css',
    '../../../css/owl.carousel.min.css',
    '../../../css/themify-icons.css',
    '../../../css/flaticon.css',
    '../../../css/magnific-popup.css',
    '../../../css/slick.css',
    '../../../css/style.css',
  ],
})
export class CourseDetailsComponent {

  constructor(private dialog:MatDialog){}

  openDialog() {
    this.dialog.open(EnrollCourseComponent, {
      height: '600px',
      position: { top: '20px' },
      data: {
        radius: '20px'
      }

    });
  }
}
