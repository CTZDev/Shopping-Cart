import { Course as CourseProps } from '../../types/Course';

type Props = {
  course: CourseProps;
  handleAddToCart: (id: string) => void;
};

const CourseItem: React.FC<Props> = ({ course, handleAddToCart }) => {
  const { id, title, url, price, priceWithDiscount, user } = course;

  return (
    <>
      <article
        className='course border-2 rounded-md overflow-hidden w-full'
        id={id}>
        <figure>
          <img src={url} alt={title} className='w-full' />
        </figure>

        <div className='p-6'>
          <header className='pb-4'>
            <h3 className='font-bold'>{title}</h3>
          </header>

          <div>
            <div className='pb-4' id={user.id} data-email={user.email}>
              <p className='pb-2 font-semibold'>{user.name}</p>
              <img src={user.rating} alt='Assesstment by course' />
            </div>

            <div className='flex items-center justify-between pb-4'>
              <p className='text-lg'>${price}</p>
              <p className='text-2xl font-bold'>${priceWithDiscount}</p>
            </div>

            <button
              type='button'
              className='btn btn-primary'
              onClick={() => handleAddToCart(id)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default CourseItem;
