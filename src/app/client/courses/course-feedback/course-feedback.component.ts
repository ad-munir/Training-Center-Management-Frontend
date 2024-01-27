import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/models/participant.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-course-feedback',
  templateUrl: './course-feedback.component.html',
  styleUrls: ['./course-feedback.component.css'],
})
export class CourseFeedbackComponent {
  feedbackForm!: FormGroup;
  courseId: any;
  participantId: any;
  participant ? : Participant ;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private participantService : ParticipantService
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.queryParams['courseId'];
    this.participantId = this.route.snapshot.queryParams['participantId'];
  
    // getting participant using participantId 
    this.participantService.getParticipantById(this.participantId)
      .subscribe((participant) => {
        this.participant = participant;
        
      }, error => {
        console.error('Error fetching participant:', error);
      });
   
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
        courseId: this.courseId,
        participantId : this.participantId
      };
      

      this.feedbackService.addFeedback(feedbackData).subscribe((data) => {
        console.log(data);
        // Handle success or navigate to another page
      });
    }
  }
}
