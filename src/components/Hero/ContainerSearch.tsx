import InputSearch from './InputSearch';

const ContainerSearch: React.FC = () => {
  return (
    <article className='text-white w-[500px] pl-6 xl:pl-0'>
      <h2 className='font-[Raleway-Bold] text-xl mb-4 md:mb-5 md:text-2xl lg:text-3xl'>
        Aprende algo nuevo
      </h2>
      <div className='hero-info font-[Raleway-Medium] md:text-lg lg:text-xl'>
        <p className='mb-4 md:mb-5'>Todos los cursos a $15</p>
        <InputSearch />
      </div>
    </article>
  );
};

export default ContainerSearch;
