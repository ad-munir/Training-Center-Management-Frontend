import {Component} from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

export interface TableElements {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  keywords: string;
}

const ELEMENT_DATA: TableElements[] = [

  {firstname: 'Reda', lastname: 'Alami', email: 'reda@outlook.com', phone:'0652331210', keywords: 'Java,Spring'},
  {firstname: 'Salim', lastname: 'Karimi', email: 'salim@gmail.com', phone:'0789002345', keywords: 'React'}
];

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-trainers-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: false,
})
export class TrainersTableComponent {
  ;

  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone', 'keywords'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<TableElements>();
}
