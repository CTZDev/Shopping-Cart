import Logo from '../Header/Logo';
import Cart from '../Header/Cart';

const Header: React.FC = () => {
  return (
    <header id='header'>
      <nav className='flex items-center justify-between p-6 max-w-[1280px] m-auto relative xl:px-8 md:py-10'>
        <Logo img='./logo.jpg' alt='Logo enterprise' />
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
