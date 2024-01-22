import { Component } from '@angular/core';
import { TrainigCenterService } from 'src/app/trainig-center.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [
    './courses.component.css',
    './../../../../assets/css/bootstrap.min.css',
    './../../../../assets/css/animate.css',
    './../../../../assets/css/owl.carousel.min.css',
    './../../../../assets/css/themify-icons.css',
    './../../../../assets/css/flaticon.css',
    './../../../../assets/css/magnific-popup.css',
    './../../../../assets/css/slick.css',
    './../../../../assets/css/style.css'
  ],
})
export class CoursesComponent {
  constructor(private service: TrainigCenterService) {}

  courses ?: any[];

  async ngOnInit() {
    await this.getCourses();
    // Do something else after courses are fetched
  }

  async getCourses() {
    try {
      this.courses = await this.service.getCourses().toPromise();
      console.log(this.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }


}
