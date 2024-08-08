import { BannerItem as BannerItemProps } from '../../types/Banner';

type Props = BannerItemProps;

const BannerItem: React.FC<Props> = ({
  url,
  title,
  firstContent,
  secondContent,
}) => {
  return (
    <article className='banner-item flex flex-col items-center gap-3 xl:flex-row xl:text-left xl:gap-5'>
      <article className='banner-item flex flex-col items-center gap-3 xl:flex-row xl:text-left xl:gap-5'>
        <figure>
          <img src={url} alt={title} className='w-8 h-10' />
        </figure>
        <div className='banner-content'>
          <p>{firstContent}</p>
          <p>{secondContent}</p>
        </div>
      </article>
    </article>
  );
};

export default BannerItem;
