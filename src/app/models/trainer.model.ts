export interface Trainer {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  keywords: string;
  image: File;

  [key: string]: string | File;
}
