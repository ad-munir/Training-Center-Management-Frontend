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

  displayedColumns: string[] = ['fullname', 'email', 'phone', 'keywords', 'active', 'image','action'];
  clickedRows = new Set<TableElements>();




  navigateToTrainerProfile(trainerId: number): void {
    this.router.navigate(['/trainer-profile', trainerId]);
  }
}

