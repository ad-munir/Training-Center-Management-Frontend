import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', './../layout.component.css']
})
export class SidebarComponent implements OnInit  {

  role: any ; // Assurez-vous de définir le type correct de votre rôle

  ngOnInit() {
    // Obtenez le rôle à partir du stockage local
    this.role = localStorage.getItem('ROLE');
  }

  isCoursesDropdownOpen = false;
  isTrainersDropdownOpen = false;
  isParticipantsDropdownOpen = false;
  isAssistantsDropdownOpen = false;
  isCompaniesDropdownOpen = false;

  isProfileDropdownOpen = false;

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  toggleCoursesDropdown(): void {
    this.isCoursesDropdownOpen = !this.isCoursesDropdownOpen;
    this.closeOtherDropdowns('courses');
  }

  toggleTrainersDropdown(): void {
    this.isTrainersDropdownOpen = !this.isTrainersDropdownOpen;
    this.closeOtherDropdowns('trainers');
  }

  toggleParticipantsDropdown(): void {
    this.isParticipantsDropdownOpen = !this.isParticipantsDropdownOpen;
    this.closeOtherDropdowns('participants');
  }

  toggleAssistantsDropdown(): void {
    this.isAssistantsDropdownOpen = !this.isAssistantsDropdownOpen;
    this.closeOtherDropdowns('assistants');
  }

  toggleCompaniesDropdown(): void {
    this.isCompaniesDropdownOpen = !this.isCompaniesDropdownOpen;
    this.closeOtherDropdowns('companies');
  }


  private closeOtherDropdowns(exclude: string): void {
    if (exclude !== 'courses') {
      this.isCoursesDropdownOpen = false;
    }
    if (exclude !== 'trainers') {
      this.isTrainersDropdownOpen = false;
    }
    if (exclude !== 'participants') {
      this.isParticipantsDropdownOpen = false;
    }
    if (exclude !== 'assistants') {
      this.isAssistantsDropdownOpen = false;
    }
    if (exclude !== 'companies') {
      this.isCompaniesDropdownOpen = false;
    }
  }
}
