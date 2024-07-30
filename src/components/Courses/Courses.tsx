import { COURSES } from '../../consts/course';
import Course from './Course';

const Courses: React.FC = () => {
  return (
    <section className='font-[Raleway-Regular]'>
      <h2 className='text-3xl font-bold text-center pt-8 font-[Raleway-medium] md:text-5xl md:pt-16 md:pb-8'>
        Cursos en Línea
      </h2>
      <div className='mx-6'>
        <section id='list-courses' className='overflow-auto'>
          {COURSES.map((props) => (
            <Course key={props.courseId} {...props} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Courses;
