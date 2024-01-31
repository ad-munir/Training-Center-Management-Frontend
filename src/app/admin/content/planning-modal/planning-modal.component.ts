import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

interface DATA {
  id: any;
  title: string;
}

@Component({
  selector: 'app-planning-modal',
  templateUrl: './planning-modal.component.html',
  styleUrls: ['./planning-modal.component.css'],
})
export class PlanningModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PlanningModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private courseService: CourseService
  ) {}

  selectedCourseId: any;
  courseControl = new FormControl();

  ngOnInit(): void {
    this.getCourses();
  }

  courses!: Course[];
  coursesNames!: DATA[];


  getCourses(): void {
    this.courseService.getCourses().subscribe(
      (data: Course[]) => {
        console.log('fetch Courses:', data);

        this.courses = data;
        this.coursesNames = data.map((course) => ({
          id: course.id,
          title: course.title,
        }));

        console.log(this.coursesNames);

      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  onSubmit(queryName: string) {
    this.dialogRef.close(queryName);
  }
}
