import { Component } from '@angular/core';

export interface TableElements {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

const ELEMENT_DATA: TableElements[] = [

  {firstname: 'Reda', lastname: 'Alami', email: 'reda@outlook.com', phone:'0652331210' },
  {firstname: 'Salim', lastname: 'Karimi', email: 'salim@gmail.com', phone:'0789002345' }
];
/**
 * @title Binding event handlers and properties to the table rows.
 */

@Component({
  selector: 'app-assistants-table',
  templateUrl: './assistants-table.component.html',
  styleUrls: ['./assistants-table.component.css'],
  standalone: false
})
export class AssistantsTableComponent {



  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<TableElements>();

}
