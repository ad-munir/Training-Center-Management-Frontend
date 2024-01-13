import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Training_Center';
  isLoading: boolean = false;

  ngOnInit(): void {
    // Simulate loading data (replace this with your actual data loading logic)
    this.isLoading = true;

    setTimeout(() => {
      // Simulate data loading completion
      this.isLoading = false;
    }, 3000); // Adjust the duration based on your requirements
  }

}
