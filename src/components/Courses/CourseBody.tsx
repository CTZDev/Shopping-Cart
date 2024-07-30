import type { User } from '../../types/User';

interface CourseDetailsProps {
  user: User;
  price: number;
  priceWithDiscount: number;
}

type Props = CourseDetailsProps;

const CourseBody: React.FC<Props> = ({ user, price, priceWithDiscount }) => {
  return (
    <>
      <div className='pb-4' data-userid={user.userId} data-email={user.email}>
        <p className='pb-2 font-semibold'>{user.name}</p>
        <img src={user.rating} alt='Assesstment by course' />
      </div>

      <div className='flex items-center justify-between pb-4'>
        <p className='text-lg'>${price}</p>
        <p className='text-2xl font-bold'>${priceWithDiscount}</p>
      </div>
    </>
  );
};

export default CourseBody;
