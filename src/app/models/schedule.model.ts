import { Course } from "./course.model";

export interface Schedule {
  startDate: Date,
  endDate: Date,
  courseId: any,
  course: Course | null

}
