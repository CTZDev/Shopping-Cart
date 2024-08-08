import { CartItem } from '../../reducers/propsReducerCart';

type Props = {
  cartItem: CartItem;
  handleDeleteFromCart: (course: CartItem) => void;
};

const ShoppingCartCourse: React.FC<Props> = ({
  cartItem: { course, quantity },
  handleDeleteFromCart,
}) => {
  return (
    <tr>
      <td colSpan={2} className='table-cell p-1'>
        <img src={course.url} alt={course.title} className='w-full' />
      </td>
      <td colSpan={1} className='table-cell p-1'>
        {course.title}
      </td>
      <td colSpan={1} className='table-cell p-1'>
        ${course.priceWithDiscount}
      </td>
      <td colSpan={1} className='table-cell p-1'>
        {quantity}
      </td>
      <td colSpan={1} className='table-cell p-1'>
        <button
          className='align-middle'
          onClick={() => handleDeleteFromCart({ course, quantity })}>
          <img
            src='./close.svg'
            alt='Delete item'
            className='pointer-events-none'
          />
        </button>
      </td>
    </tr>
  );
};

export default ShoppingCartCourse;
