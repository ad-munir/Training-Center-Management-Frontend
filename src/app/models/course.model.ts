export interface Course {
  title: string;
  hours: string;
  cost: number;
  description: string;
  type: string;
  category: string;
  image: File;

  [key: string]: string | number | File;
}
