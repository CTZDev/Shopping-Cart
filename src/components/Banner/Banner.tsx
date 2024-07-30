import { BANNER } from '../../consts/banner';
import BannerItem from './BannerItem';

const Banner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-[#741d51] to-[#e44e52] text-white'>
      <section className='banner-list font-[Raleway-Regular]'>
        {BANNER.map((props) => (
          <BannerItem key={props.url} {...props} />
        ))}
      </section>
    </div>
  );
};

export default Banner;
