import Cart from './Cart';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header id='header'>
      <nav className='flex items-center justify-between p-6 max-w-[1280px] m-auto md:p-10 relative'>
        <Logo img='./logo.jpg' alt='Logo enterprise' />
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
