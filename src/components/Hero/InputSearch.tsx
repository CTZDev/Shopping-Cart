const InputSearch: React.FC = () => {
  return (
    <div className='form-control relative mr-6'>
      <input
        type='text'
        id='txtMainSearch'
        placeholder='¿Que te gustaría aprender?'
        className='p-2.5 w-full rounded-md text-black outline-none transition-all border-2 border-transparent focus:border-2 focus:border-[#e46c6c]'
      />

      <button
        type='button'
        className='absolute top-2/4 right-0 -translate-y-2/4'>
        <img src='./lupa.png' alt='Search Courses' />
      </button>
    </div>
  );
};

export default InputSearch;
