import { Link } from '../../types/Link';

const CourseCover: React.FC<Link> = ({ url, title }) => {
  return (
    <>
      <figure>
        <img src={url} alt={title} className='w-full' />
      </figure>
    </>
  );
};

export default CourseCover;
