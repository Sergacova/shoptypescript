import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/logo.svg';
import CartICon from '../../cart/CartIcon';
import { ThemeSwitcher } from '../../theme/ThemeSwitcher';

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <header>
       <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option>Choose language</option>
          <option value="es">English</option>
          <option value="ru">Russian</option>
          <option value="en">Espanol</option>
        </select>
        {t('welcome')}
  
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