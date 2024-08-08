import { COURSES } from '../consts/course';
import type { CartAction, CartState } from './propsReducerCart';

export const coursesInitialState = {
  courses: [...COURSES],
  cart: [],
  totalPrice: 0,
};

export const reducerCart = (
  state: CartState,
  action: CartAction
): CartState => {
  if (!action.type) throw new Error('Unknown action');
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case 'ADD_COURSE': {
      const courseInCartIndex = state.cart.findIndex(
        (item) => item.course.id === actionPayload!.course.id
      );

      /* Course is in the cart */
      if (courseInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState.cart[courseInCartIndex].quantity += 1;
        newState.totalPrice += action.payload!.course.priceWithDiscount;
        return newState;
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            course: actionPayload!.course,
            quantity: 1,
          },
        ],
        totalPrice: state.totalPrice + actionPayload!.course.priceWithDiscount,
      };
    }

    case 'DELETE_COURSE_BYID': {
      const courseToRemove = state.cart.find(
        (item) => item.course.id === actionPayload?.course.id
      );

      if (!courseToRemove) return state;

      const updatedCart = state.cart.filter(
        (item) => item.course.id !== actionPayload?.course.id
      );

      const updateTotalPrice =
        state.totalPrice -
        courseToRemove.course.priceWithDiscount * courseToRemove.quantity;

      return {
        ...state,
        cart: updatedCart,
        totalPrice: updateTotalPrice,
      };
    }

    case 'DELETE_COURSES': {
      return coursesInitialState;
    }

    default:
      return state;
  }
};
