import { Component } from '@angular/core';




export interface TableElements {
  name: string;
  address: string;
  email: string;
  phone: string;
  url: string;
}

const ELEMENT_DATA: TableElements[] = [

  {name: 'Babel', address: 'Casablanca', email: 'hr@babel.com', phone:'0523331210', url: 'https://github.com/ad-munir/Training-Center-Management/'},
  {name: 'SQLI', address: 'Rabat', email: 'hr@sqli.com', phone:'0511002345', url: 'https://github.com/ad-munir/Training-Center-Management/'}
];

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css'],
  standalone: false
})

export class CompaniesTableComponent {


  displayedColumns: string[] = ['name', 'address', 'email', 'phone', 'url'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<TableElements>();
}
