import { LINKS } from '../../consts/links';
import FooterLinkItem from '../Footer/FooterLinkItem';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        {LINKS.map(({ title, url }) => (
          <FooterLinkItem key={title} url={url} title={title} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
