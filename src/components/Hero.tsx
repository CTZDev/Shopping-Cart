const Hero = () => {
  return (
    <div className='w-full relative'>
      <figure id='hero'>
        <img
          src='./hero.jpg'
          alt='Hero of the page'
          className='w-full h-[420px] object-cover'
        />
      </figure>

      <article className='text-white absolute w-72 ml-8 sm:w-96 sm:ml-24 md:ml-48 xl:ml-80 top-2/4 -translate-y-2/4'>
        <h2 className='font-[Raleway-Bold] text-xl mb-4 md:mb-5 md:text-2xl lg:text-3xl'>
          Aprende algo nuevo
        </h2>
        <div className='hero-info font-[Raleway-Medium] md:text-lg lg:text-xl'>
          <p className='mb-4 md:mb-5'>Todos los cursos a $15</p>
          <div className='form-control relative'>
            <input
              type='text'
              name='txtMainSearch'
              id='txtMainSearch'
              placeholder='¿Que te gustaría aprender?'
              className='p-2 w-full'
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
  );
};

export default Hero;
