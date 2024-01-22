import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course.model';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: [
    './courses-form.component.css',
    './../../../layout/layout.component.css',
    './.././../../layout/bootstrap-overwrite.css',
  ],
})
export class CoursesFormComponent implements OnInit {
  form: any;
  selectedFile: File | null = null;


  constructor(private fb: FormBuilder, private courseService: CourseService,
    private trainerService: TrainerService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  courses: Course[] = [];
  trainers: Trainer[] = [];





  getTrainers(): void {
    this.trainerService.getTrainers()
      .subscribe(
        (data: Trainer[]) => {
          console.log('fetch trainers:', data);

          // Update trainers and trigger change detection
          this.trainers = data;
          this.changeDetectorRef.detectChanges();
        },
        error => {
          console.error('Error fetching trainers:', error);
        }
      );
  }



  ngOnInit(): void {

    this.getTrainers();

    this.form = this.fb.group({
      title: ['', Validators.required],
      hours: ['', Validators.required],
      cost: [0, Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      image: [null, Validators.required],
      trainerId: [null, Validators.required],

    });
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }


  onSubmit(): void {
    if (this.selectedFile) {
      console.log('selectedFile');
      console.log(this.form);

      const formData = new FormData();

      formData.append('title', this.form.get('title')?.value);
      formData.append('hours', this.form.get('hours')?.value);
      formData.append('cost', this.form.get('cost')?.value);
      formData.append('description', this.form.get('description')?.value);
      formData.append('type', this.form.get('type')?.value);
      formData.append('category', this.form.get('category')?.value);
      formData.append('image', this.selectedFile);
      formData.append('trainerId', this.form.get('trainerId')?.value);


      this.courseService.addCourse(formData).subscribe(
        (newCourse) => {
          console.log('Course added successfully:', newCourse);
          // Optionally, you can redirect or perform other actions here
        },
        (error) => {
          console.error('Error adding course:', error);
          // Handle error as needed
        }
      );
    } else {
      console.error('No file selected');
    }
  }

  selectTrainer(event: any): void {
    const trainerId = event.target.value;
    this.form.get('trainerId').setValue(trainerId);
  }



}
