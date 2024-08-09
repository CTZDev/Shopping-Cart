import { useContext } from 'react';
import CourseItem from './CourseItem';
import { CartContext } from '../../contexts/CartContext';
import type { CartItem } from '../../reducers/propsReducerCart';
import { useCourses } from '../../hooks/useCourses';

const Courses: React.FC = () => {
  const { courses } = useCourses();
  const [, dispatch] = useContext(CartContext);

  const handleAddToCart = (cartItem: CartItem) => {
    dispatch({
      type: 'ADD_COURSE',
      payload: cartItem,
    });
  };

  return (
    <section className='font-[Raleway-Regular]'>
      <h2 className='text-3xl font-bold text-center pt-8 font-[Raleway-medium] md:text-5xl md:pt-16 md:pb-8'>
        Cursos en Línea
      </h2>
      <div className='mx-6'>
        <section id='list-courses' className='overflow-auto'>
          {courses.length > 0 &&
            courses.map((course) => (
              <CourseItem
                key={course.id}
                course={course}
                handleAddToCart={() => handleAddToCart({ course, quantity: 1 })}
              />
            ))}
        </section>
      </div>
    </section>
  );
};

export default Courses;
