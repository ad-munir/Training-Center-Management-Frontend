import { Component } from '@angular/core';

@Component({
  selector: 'app-trainers-main',
  templateUrl: './trainers-main.component.html',
  styleUrls: ['./trainers-main.component.css', './../../../layout/layout.component.css', './.././../../layout/bootstrap-overwrite.css']
})
export class TrainersMainComponent {
  keywords: string[] = [];
  newKeyword: string = '';

  addKeyword() {
    if (this.newKeyword.trim() !== '') {
      this.keywords.push(this.newKeyword.trim());
      this.newKeyword = '';
    }
  }
}

