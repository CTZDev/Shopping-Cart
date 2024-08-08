import CART_ACTIONS_TYPES from './actionTypeCart';
import { Course } from '../types/Course';

type CartActionType =
  (typeof CART_ACTIONS_TYPES)[keyof typeof CART_ACTIONS_TYPES];

export type CartItem = {
  course: Course;
  quantity: number;
};

export type CartState = {
  courses: Array<Course>;
  cart: Array<CartItem>;
  totalPrice: number;
};

export type CartAction = { type: CartActionType; payload?: CartItem };
