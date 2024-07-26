interface Props {
  img: string;
  alt: string;
}

const Logo: React.FC<Props> = ({ img, alt }) => {
  return (
    <figure>
      <img src={img} alt={alt} />
    </figure>
  );
};

export default Logo;
