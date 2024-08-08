import Swal from 'sweetalert2';
import 'animate.css';
import { useContext } from 'react';
import ShoppingCartCourse from './ShoppingCartCourse';
import { CartContext } from '../../contexts/CartContext';
import type { CartItem } from '../../reducers/propsReducerCart';

const Cart: React.FC = () => {
  const [store, dispatch] = useContext(CartContext);

  const handleToggleCart = () => {
    const $container = document.getElementById('container-cart');
    $container?.classList.toggle('hidden');
  };

  const handleDeleteFromCart = (cartItem: CartItem) => {
    dispatch({
      type: 'DELETE_COURSE_BYID',
      payload: cartItem,
    });
  };

  const handleDeleteAllCart = () => {
    dispatch({
      type: 'DELETE_COURSES',
    });

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El carrito ha sido vaciado correctamente',
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };

  return (
    <>
      <button type='button' onClick={handleToggleCart}>
        <img src='./cart.png' alt='Cart' />
      </button>

      <article
        id='container-cart'
        className='absolute top-full right-0 bg-white z-10 hidden'>
        <table
          id='table-cart'
          className='table table-auto text-center border-collapse border w-[340px] sm:w-96 md:w-[450px]'>
          <thead className='table-header-group'>
            <tr className='table-row border-b'>
              <th colSpan={2} className='table-cell p-2'>
                Imagen
              </th>
              <th colSpan={1} className='table-cell p-2'>
                Nombre
              </th>
              <th colSpan={1} className='table-cell p-2 red'>
                Precio
              </th>
              <th colSpan={1} className='table-cell p-2'>
                Cantidad
              </th>
              <th colSpan={1} className='table-cell p-2'>
                Cancelar
              </th>
            </tr>
          </thead>

          <tbody className='table-row-group'>
            {store.cart.length === 0 ? (
              <tr>
                <td colSpan={6}>There is not courses in the cart 😓😓</td>
              </tr>
            ) : (
              store.cart.map((cartItem) => (
                <ShoppingCartCourse
                  key={cartItem.course.id}
                  cartItem={cartItem}
                  handleDeleteFromCart={() => handleDeleteFromCart(cartItem)}
                />
              ))
            )}
          </tbody>

          <tfoot className='table-footer-group'>
            <tr>
              <td colSpan={5} className='px-4 py-3'>
                <button
                  className='btn btn-primary'
                  onClick={() =>
                    store.cart.length > 0 && handleDeleteAllCart()
                  }>
                  Vaciar carrito
                </button>
              </td>
              <td className='font-semibold'>${store.totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </article>
    </>
  );
};

export default Cart;
