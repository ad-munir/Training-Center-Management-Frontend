import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';



export interface TableElements {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  keywords: string;
  active: boolean;
  image: File;
}


@Component({
  selector: 'app-trainers-table',
  templateUrl: './trainers-table.component.html',
  styleUrls: ['./trainers-table.component.css'],
  standalone: false,
})
export class TrainersTableComponent  implements OnInit {

  constructor(
    private trainerService: TrainerService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}


  trainers: Trainer[] = [];

  ngOnInit(): void {
    this.getTrainers();
  }

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

  displayedColumns: string[] = ['fullname', 'email', 'phone', 'keywords', 'active', 'image', 'validate'];
  clickedRows = new Set<TableElements>();




  navigateToTrainerProfile(trainerId: number): void {
    this.router.navigate(['/trainer-profile', trainerId]);
  }

  // validateTrainer(id: any) {
  //   this.trainerService.validateTrainerExtern(id).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  
  validateTrainer(id: any) {
    this.trainerService.validateTrainerExtern(id).subscribe(data => {
      console.log(data);

      if (data === true) {
        const trainerToUpdate = this.trainers.find(trainer => trainer.id === id);

        if (trainerToUpdate) {
          // Update the 'active' property of the trainer
          trainerToUpdate.active = true;
        } else {
          console.error('Trainer not found in the list.');
        }
      } else {
        console.error('Validation failed.');
      }
    });
  }
}


