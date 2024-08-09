import React from 'react';
import ReactDOM from 'react-dom/client';
import ShoppingCartApp from './ShoppingCartApp';
import '../index.css';
import { CartProvider } from './contexts/CartContext';
import { CoursesProvider } from './contexts/CoursesContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <CoursesProvider>
        <ShoppingCartApp />
      </CoursesProvider>
    </CartProvider>
  </React.StrictMode>
);
