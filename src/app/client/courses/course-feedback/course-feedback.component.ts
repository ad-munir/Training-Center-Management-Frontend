import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-course-feedback',
  templateUrl: './course-feedback.component.html',
  styleUrls: ['./course-feedback.component.css'],
})
export class CourseFeedbackComponent {
  feedbackForm!: FormGroup;
  courseId: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.queryParams['courseId'];
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      comments: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      const feedbackData = {
        comments: this.feedbackForm.get('comments')!.value,        
        score: this.feedbackForm.get('score')!.value,
        courseId: this.courseId
      };
      

      this.feedbackService.addFeedback(feedbackData).subscribe((data) => {
        console.log(data);
        // Handle success or navigate to another page
      });
    }
  }
}
