import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css'],
})
export class TrainerProfileComponent implements OnInit {


  trainer?: Trainer;
  trainerId: string = '';
  keywords: string[] = [];

  constructor(
    private trainerService: TrainerService,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
    this.getTrainerId();
    this.getTrainer();
  }


  getTrainer(): void {

    this.trainerService.getTrainerById(this.trainerId)

      .subscribe(
        (data: Trainer) => {
          console.log('trainer:', data);

          this.trainer = data;
          this.keywords = this.trainer?.keywords.split(',');
        },
        (error) => {
          console.error('Error fetching trainer:', error);
        }
      );
  }

  getTrainerId(): void {
    this.route.params.subscribe((params) => {
      this.trainerId = params['id'];
    });
  }

}

