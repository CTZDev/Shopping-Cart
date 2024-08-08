import { createContext, useReducer } from 'react';
import {
  coursesInitialState,
  reducerCart,
} from '../reducers/shoppingCartReducer';
import type { CartAction, CartState } from '../reducers/propsReducerCart';

export const CartContext = createContext<
  [CartState, React.Dispatch<CartAction>]
>([coursesInitialState, () => null]);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useReducer(reducerCart, coursesInitialState);

  return (
    <CartContext.Provider value={[store, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
