import { useId, useState } from 'react';
import { useCourses } from '../../hooks/useCourses';
import { COURSES } from '../../consts/course';

const InputSearch: React.FC = () => {
  const txtsearchID = useId();
  const [inputValue, setInputValue] = useState('');
  const { setCourses } = useCourses();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    /* Search courses of the List */
    const coursesInList = COURSES.filter((course) => {
      const titleToLower = course.title.toLowerCase();
      const priceToString = course.priceWithDiscount.toString();
      return (
        titleToLower.includes(value.toLowerCase()) || priceToString === value
      );
    });

    setCourses(coursesInList);
  };

  return (
    <div className='form-control relative mr-6'>
      <input
        type='text'
        id={txtsearchID}
        placeholder='¿Que te gustaría aprender?'
        className='p-2.5 w-full rounded-md text-black outline-none transition-all border-2 border-transparent focus:border-2 focus:border-[#e46c6c]'
        value={inputValue}
        onChange={handleChange}
      />

      <button
        type='submit'
        className='absolute top-2/4 right-0 -translate-y-2/4'>
        <img
          src='./lupa.png'
          alt='Search Courses'
          className='pointer-events-none'
        />
      </button>
    </div>
  );
};

export default InputSearch;
