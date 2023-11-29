import { Link } from 'react-router-dom';
import { useProductsSelector } from '../../store/product.slice';
import ProductsList from '../../products/ProductsList';

const HomePage = () => {

  const products = useProductsSelector();

      return (
        <div className='home-page'>
          <Link to='/products'>See All</Link>
        <ProductsList products={products.slice(0, 8)} />
        </div>
    );
    };
    
    
    export default HomePage;