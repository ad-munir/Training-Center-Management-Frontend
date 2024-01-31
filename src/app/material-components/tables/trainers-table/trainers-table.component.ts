import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';
import { ToastService } from 'src/app/services/toast.service';
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
    private router: Router,
    private toast: ToastService
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
          this.toast.showError("Error fetching trainers");
        }
      );
  }

  displayedColumns: string[] = ['fullname', 'email', 'phone', 'keywords', 'active', 'image','validate','action'];
  clickedRows = new Set<TableElements>();




  navigateToTrainerProfile(trainerId: number): void {
    this.router.navigate(['/trainer-profile', trainerId]);
  }

  validateTrainer(id: any) {
    this.trainerService.validateTrainerExtern(id).subscribe(data => {
      console.log(data);


      if (data === true) {
        this.toast.showSuccess('Trainer has been activated successfuly!');
        const trainerToUpdate = this.trainers.find(trainer => trainer.id === id);

        if (trainerToUpdate) {
          // Update the 'active' property of the trainer
          trainerToUpdate.active = true;
        } else {
          this.toast.showError('Trainer not found in the list.');
        }
      } else {
        this.toast.showError('Validation failed!');
      }

      this.router.navigate(['/trainers/all'])
    });

  }


  deleteTrainer(id: any) {
    this.trainerService.deleteTrainer(id)
    .subscribe(
        (response) => {
          console.log(response);
          this.toast.showSuccess('Trainer has been deleted successfuly!');
        },
        error => {
          console.log(error);
          this.toast.showError('Error in deleting trainer !');
        }
        );
        this.router.navigate(['/trainers/all']);
      }


  editTrainer(id: number) {

  }
}


