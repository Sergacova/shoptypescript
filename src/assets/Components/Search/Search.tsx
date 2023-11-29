import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useLazySearchProductsQuery } from '../../store/productapi';
import ProductsList from '../../products/ProductsList';
import SearchForm from './SearchForm';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Pagination from '../Pagination/Pagination';


const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [activePage, setActivePage] = useState(1);

  const [debouncedQuery] = useDebounce(query, 500);
  const [searchProducts, { data, error, isLoading }] = useLazySearchProductsQuery();

  useEffect(() => {
    if (debouncedQuery.length) {
      searchProducts({ query: debouncedQuery });
    }
  }, [debouncedQuery, searchProducts]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <h1>Search Products</h1>
      <SearchForm query={query} setQuery={setQuery} />

      {data && query.length ? (
        <>
          <ProductsList products={data?.products} />
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={data?.total}
            limit={data?.limit}
          />
        </>
      ) : (
        <p>No products found</p>
      )}
    </>
  );
};

export default SearchPage;
