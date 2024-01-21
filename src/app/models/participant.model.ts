export interface Participant {
  firstname: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  city: string;

  [key: string]: string|Date;
}
