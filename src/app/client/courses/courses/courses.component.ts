import { Component } from '@angular/core';
import { TrainigCenterService } from 'src/app/trainig-center.service';
import 'swiper';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [
    './courses.component.css',
    '../../../css/bootstrap.min.css',
    '../../../css/animate.css',
    '../../../css/owl.carousel.min.css',
    '../../../css/themify-icons.css',
    '../../../css/flaticon.css',
    '../../../css/magnific-popup.css',
    '../../../css/slick.css',
    '../../../css/style.css'
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
