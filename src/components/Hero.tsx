const Hero = () => {
  return (
    <div id='hero' className='w-full relative'>
      <div className='max-w-[1280px] m-auto h-[420px] flex items-center'>
        <article className='text-white w-[500px] pl-6 xl:pl-0'>
          <h2 className='font-[Raleway-Bold] text-xl mb-4 md:mb-5 md:text-2xl lg:text-3xl'>
            Aprende algo nuevo
          </h2>
          <div className='hero-info font-[Raleway-Medium] md:text-lg lg:text-xl'>
            <p className='mb-4 md:mb-5'>Todos los cursos a $15</p>
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
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
