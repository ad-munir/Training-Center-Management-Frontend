import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';

export interface TableElements {
  firstname: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  city: string;
}

@Component({
  selector: 'app-participants-table',
  templateUrl: './participants-table.component.html',
  styleUrls: ['./participants-table.component.css']
})
export class ParticipantsTableComponent implements OnInit {

  constructor(
    private participantService: ParticipantService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  participants: Participant[] = [];

  ngOnInit(): void {
    this.getParticipants();
  }




  getParticipants(): void {
    this.participantService.getParticipants()
      .subscribe(
        (data: Participant[]) => {
          console.log('fetch participants:', data);

          // Update participants and trigger change detection
          this.participants = data;
          this.changeDetectorRef.detectChanges();
        },
        error => {
          console.error('Error fetching participants:', error);
        }
      );
  }



  displayedColumns: string[] = ['fullname', 'birthday', 'email', 'phone', 'city'];
  clickedRows = new Set<TableElements>();

  navigateToParticipantProfile(participantId: number): void {
    this.router.navigate(['/participant-profile', participantId]);
  }
}
