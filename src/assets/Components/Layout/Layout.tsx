import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/productapi';
import useActions from '../../hooks/useActions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
const Layout = () => {


  const { setProducts } = useActions();
  const { data, error, isLoading, isSuccess } = useGetProductsQuery({ limit: 100, skip: 0 });

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.products);
    }
  }, [data, isSuccess, setProducts]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
 