import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css'],
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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', [Validators.required, this.validateDate]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      city: [''],
      courseId: +this.courseId,
    });
  }

  validateDate(control: any) {
    const isValid = /\d{4}-\d{2}-\d{2}/.test(control.value);
    return isValid ? null : { invalidDateFormat: true };
  }

  onSubmit() {
    if (this.participantForm.valid) {
      const participantData = this.participantForm.value;

      this.participantService.addParticipant(participantData).subscribe(
        (response) => {
          console.log('Participant added successfully:', response);
        },

        (error) => {
          console.error('Error adding participant:', error);
        }
      );
    }
  }

}
