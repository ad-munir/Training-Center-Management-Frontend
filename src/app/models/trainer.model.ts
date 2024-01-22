import { Course } from "./course.model";


export interface Trainer {
  id: Number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  keywords: string;
  image: any;
  courses: Course[];

  [key: string]: string | number | File | Number | Course[] | null;
}
