import { User } from './User';

export interface Course {
  id: string;
  title: string;
  url: string;
  price: number;
  priceWithDiscount: number;
  user: User;
}
