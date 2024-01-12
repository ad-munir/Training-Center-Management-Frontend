import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent {

  participant: any = {};

  // constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  submitForm() {

    console.log('Participant Information:', this.participant);



  }

}
