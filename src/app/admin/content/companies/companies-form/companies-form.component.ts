import { Component } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: [
    './companies-form.component.css',
    './../../../layout/layout.component.css',
    './.././../../layout/bootstrap-overwrite.css',
  ],
})
export class CompaniesFormComponent {
  company: any = {
    name: '',
    address: '',
    email: '',
    phone: '',
    url: ''
  };

  constructor(private companyService: CompanyService) {}

  onSubmit(): void {

    this.companyService.addCompany(this.company).subscribe(
      (newCompany) => {
        console.log('Company added successfully:', newCompany);

      },
      (error) => {
        console.error('Error adding company:', error);

      }
    );
  }
}
