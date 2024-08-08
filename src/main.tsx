import React from 'react';
import ReactDOM from 'react-dom/client';
import ShoppingCartApp from './ShoppingCartApp';
import '../index.css';
import { CartProvider } from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ShoppingCartApp />
    </CartProvider>
  </React.StrictMode>
);
