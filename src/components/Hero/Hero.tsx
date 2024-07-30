import ContainerSearch from './ContainerSearch';

const Hero: React.FC = () => {
  return (
    <section id='hero' className='w-full relative'>
      <div className='max-w-[1280px] m-auto h-[420px] flex items-center'>
        <ContainerSearch />
      </div>
    </section>
  );
};

export default Hero;
