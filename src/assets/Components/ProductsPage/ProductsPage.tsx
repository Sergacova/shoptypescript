import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/productapi';
import ProductsList from '../../products/ProductsList';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Pagination from '../Pagination/Pagination';
const ProductsPage = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({
    limit: 24,
    skip: (activePage - 1) * 10,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <h1>Products</h1>
      <ProductsList products={data?.products} />
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        total={data?.total}
        limit={data?.limit}
      />
      <Outlet />
    </>
  );
};

export default ProductsPage;