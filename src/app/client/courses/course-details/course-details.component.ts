import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: [
    './course-details.component.css',
    '../../../css/bootstrap.min.css',
    '../../../css/animate.css',
    '../../../css/owl.carousel.min.css',
    '../../../css/themify-icons.css',
    '../../../css/flaticon.css',
    '../../../css/magnific-popup.css',
    '../../../css/slick.css',
    '../../../css/style.css',
  ],
})
export class CourseDetailsComponent implements OnInit {

  courseId: any;
  courseDetails: any; 

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      console.log(this.courseId);
      
      
      // Fetch course details using courseId
      this.courseService.getCourseById(this.courseId).subscribe((data) => {
        this.courseDetails = data;
        console.log(this.courseDetails);
        
      });
    });
  }
}
