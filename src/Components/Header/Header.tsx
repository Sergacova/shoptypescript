import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/logo.svg';
import CartICon from '../../cart/CartIcon';
import { ThemeSwitcher } from '../../theme/ThemeSwitcher';
import i18n from '../../118n/i18n';

const Header = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
 };

  return (
    <header>
   <p>{i18n.t('welcome')}</p>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      <Link to='/' className='logo'>
        <img src={logo} height='40' alt='logo' />
      </Link>
      <div className='header-nav'>
        <Link to='/products/search'>
          <SearchIcon />
        </Link>
        <Link to='/cart'>
          <CartICon />
        </Link>
  
          <Link to='/Login'>
            <button type='button'>Login</button>
          </Link>
          <ThemeSwitcher />
        
      </div>
    </header>
  
  );
};

export default Header;