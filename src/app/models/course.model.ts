import { Trainer } from "./trainer.model";

export interface Course {
  title: string;
  hours: string;
  cost: number;
  description: string;
  type: string;
  category: string;
  image: any;
  trainer: Trainer;

  [key: string]: string | number | File | Trainer | null;
}
