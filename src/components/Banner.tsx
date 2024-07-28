const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-[#741d51] to-[#e44e52] text-white'>
      <section className='banner-list font-[Raleway-Regular]'>
        <article className='banner-item flex flex-col items-center gap-3 xl:flex-row xl:text-left xl:gap-5'>
          <figure>
            <img src='./icono1.png' alt='Focus' className='w-8 h-12' />
          </figure>
          <div className='banner-content'>
            <p>20,000 Cursos en Línea</p>
            <p>Explora los temas más recientes</p>
          </div>
        </article>

        <article className='banner-item flex flex-col items-center gap-3 xl:flex-row xl:text-left xl:gap-5'>
          <figure>
            <img src='./icono2.png' alt='Target' className='w-11 h-12' />
          </figure>
          <div className='banner-content'>
            <p>Instructores Expertos</p>
            <p>Aprende con distintos estilos</p>
          </div>
        </article>

        <article className='banner-item flex flex-col items-center gap-3 xl:flex-row xl:text-left xl:gap-5'>
          <figure>
            <img src='./icono3.png' alt='Timer' className='w-11 h-12' />
          </figure>
          <div className='banner-content'>
            <p>Acceso de por vida</p>
            <p>Aprende a tu ritmo</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Banner;
