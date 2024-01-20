import { Component } from '@angular/core';


export interface TableElements {
  title: string;
  hours: string;
  cost: number;
  description: string;
  type: string;
  category: string;
}

const ELEMENT_DATA: TableElements[] = [

  { title: 'Angular Development', hours: '40', cost: 500.0, description: 'Learn Angular for web development', type: 'Companies', category: 'Programming' },
  { title: 'Java Fundamentals', hours: '30', cost: 400.0, description: 'Basic Java programming concepts', type: 'Persons', category: 'Programming' }
];


/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css'],
  standalone: false
})

export class CoursesTableComponent {

  displayedColumns: string[] = ['title', 'hours', 'cost', 'description', 'type', 'category'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<TableElements>();
}
