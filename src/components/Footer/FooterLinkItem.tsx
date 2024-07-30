import { Link as LinkProps } from '../../types/Link';

const FooterLinkItem: React.FC<LinkProps> = ({ title, url }) => {
  return (
    <li>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {title}
      </a>
    </li>
  );
};

export default FooterLinkItem;
