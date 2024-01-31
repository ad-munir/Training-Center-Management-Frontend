import { Calendar } from '@fullcalendar/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { ToastService } from 'src/app/services/toast.service';

export interface TableElements {
  name: string;
  address: string;
  email: string;
  phone: string;
  url: string;
}

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css'],
  standalone: false,
})
export class CompaniesTableComponent implements OnInit {
  constructor(
    private companyService: CompanyService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private toast: ToastService
  ) {}

  companies: Company[] = [];

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (data: Company[]) => {
        console.log('fetch companies:', data);

        this.companies = data;
        this.dataSource = this.companies; // Set dataSource to the retrieved companies
        this.changeDetectorRef.detectChanges();


      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  displayedColumns: string[] = ['name', 'email', 'phone', 'url', 'address', 'action'];
  dataSource: Company[] = [];
  clickedRows = new Set<TableElements>();



  deleteCompany(id: any) {
    this.companyService.deleteCompany(id)
    .subscribe(
        (response) => {
          console.log(response);
          this.toast.showSuccess('Company has been deleted successfuly!');
          this.getCompanies();

        },
        error => {
          console.log(error);
          this.toast.showError('Error in deleting company !');
        }

        );
      }


  editCompany(id: number) {

  }

}
