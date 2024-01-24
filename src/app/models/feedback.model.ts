export interface Feedback {
  score: string;
  comments: string;
  courseId: number;


  [key: string]: string | number | null;
}
