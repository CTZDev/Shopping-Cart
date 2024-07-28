import Cart from './Cart';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header id='header'>
      <nav className='border-4 flex items-center justify-between p-6 max-w-[1280px] m-auto relative xl:px-8 md:py-10'>
        <Logo img='./logo.jpg' alt='Logo enterprise' />
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
