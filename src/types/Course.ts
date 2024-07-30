import { User } from './User';

export interface Course {
  courseId: string;
  title: string;
  url: string;
  price: number;
  priceWithDiscount: number;
  user: User;
}
