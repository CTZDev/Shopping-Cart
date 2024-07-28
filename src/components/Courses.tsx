const Courses = () => {
  return (
    <main className='font-[Raleway-Regular]'>
      <h2 className='text-3xl font-bold text-center pt-8 font-[Raleway-medium]'>
        Cursos en Línea
      </h2>
      <section id='list-courses'>
        <article className='course border-2 rounded-md overflow-hidden'>
          <figure id='course-cover'>
            <img src='./curso1.jpg' alt='Course' className='w-full' />
          </figure>
          <div id='course-content' className='p-6'>
            <header id='course-title' className='pb-4'>
              <h3 className='font-bold'>
                HTML5, CSS3, JavaScript para Principiantes
              </h3>
            </header>
            <div id='course-body'>
              <div id='course-info' className='pb-4'>
                <p className='pb-2 font-semibold'>Juan Pedro</p>
                <img src='./estrellas.png' alt='Assesstment by course' />
              </div>
              <div
                id='course-price'
                className='flex items-center justify-between pb-4'>
                <p className='text-lg'>$200</p>
                <p className='text-2xl font-bold'>$15</p>
              </div>
              <div id='course-footer'>
                <button type='button' className='btn btn-primary'>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Aqui se incorporan los cursos */}
      </section>
    </main>
  );
};

export default Courses;
