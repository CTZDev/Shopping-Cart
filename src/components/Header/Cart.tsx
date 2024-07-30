//! TODO: AGREGAR FUNCIONALIDAD A ELEMENTOS DE TABLA, OPTIMIZAR CODIGO

const Cart: React.FC = () => {
  return (
    <>
      <button type='button'>
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
              <th className='table-cell p-2'>Imagen</th>
              <th className='table-cell p-2'>Nombre</th>
              <th className='table-cell p-2 red'>Precio</th>
              <th className='table-cell p-2'>Cantidad</th>
              <th className='table-cell p-2'> </th>
            </tr>
          </thead>
          <tbody className='table-row-group'>
            <tr className='table-row border-b'>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>
                <button className='align-middle'>
                  <img src='./close.svg' alt='Delete item' />
                </button>
              </td>
            </tr>

            <tr className='table-row border-b'>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>Test 01</td>
              <td className='table-cell p-1'>
                <button className='align-middle'>
                  <img src='./close.svg' alt='Delete item' />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot className='table-footer-group'>
            <tr>
              <td colSpan={5} className='px-4 py-3'>
                <button className='btn btn-primary'>Vaciar carrito</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </article>
    </>
  );
};

export default Cart;
