import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from 'src/app/models/assistant.model';
import { AssistantService } from 'src/app/services/assistant.service';
import { ToastService } from 'src/app/services/toast.service';


export interface TableElements {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  keywords: string;
  image: File;
}

@Component({
  selector: 'app-assistants-table',
  templateUrl: './assistants-table.component.html',
  styleUrls: ['./assistants-table.component.css'],
  standalone: false,
})
export class AssistantsTableComponent {
  constructor(
    private assistantService: AssistantService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private toast: ToastService
  ) {}

  assistants: Assistant[] = [];

  ngOnInit(): void {
    this.getAssistants();
  }

  getAssistants(): void {
    this.assistantService.getAssistants().subscribe(
      (data: Assistant[]) => {
        console.log('fetch assistants:', data);

        // Update assistants and trigger change detection
        this.assistants = data;
        this.changeDetectorRef.detectChanges();
      },
      (error) => {
        console.error('Error fetching assistants:', error);
      }
    );
  }

  displayedColumns: string[] = ['fullname', 'email', 'phone', 'image','action'];

  clickedRows = new Set<TableElements>();

  deleteAssistant(id: any) {
    this.assistantService.deleteAssistant(id).subscribe(
      (response) => {
        console.log(response);
        this.toast.showSuccess('Assistant has been deleted successfuly!');
      },
      (error) => {
        console.log(error);
        this.toast.showError('Error in deleting Assistant !');
      }
    );
    this.router.navigate(['/assistants/all']);
  }

  editAssistant(id: number) {}
}
