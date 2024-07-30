import { Course as CourseProps } from '../../types/Course';
import Button from '../Button';
import CourseBody from './CourseBody';
import CourseHeader from './CourseHeader';

type Props = CourseProps;

const Course: React.FC<Props> = (props) => {
  const { courseId, title, url, price, priceWithDiscount, user } = props;

  return (
    <>
      <article
        className='course border-2 rounded-md overflow-hidden w-full'
        data-courseid={courseId}>
        <figure>
          <img src={url} alt={title} className='w-full' />
        </figure>

        <div className='p-6'>
          <CourseHeader key={title} title={title} />

          <div>
            <CourseBody
              key={user.userId}
              user={user}
              price={price}
              priceWithDiscount={priceWithDiscount}
            />

            <Button key={crypto.randomUUID()} />
          </div>
        </div>
      </article>
    </>
  );
};

export default Course;
