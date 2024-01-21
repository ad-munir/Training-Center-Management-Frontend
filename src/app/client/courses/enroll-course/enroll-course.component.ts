import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: [
    './enroll-course.component.css',
  ],
})
export class EnrollCourseComponent {
  participantForm!: FormGroup;
  courseId: any;

  constructor(
    private fb: FormBuilder,
    private participantService: ParticipantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('id');
    });
    this.participantForm = this.fb.group({
      courseId: [this.courseId, Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      city: [''],
    });
  }

  onSubmit() {
    if (this.participantForm.valid) {
      const participantData = this.participantForm.value;

      this.participantService
        .addParticipant(participantData)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
