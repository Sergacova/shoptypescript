import { FC } from 'react';
import { IProduct } from '../store/productTypes';
import ProductItem from './ProductItem';
import './products.css';

interface IProductsListProps {
  products: IProduct[] | undefined;
}

const ProductsList: FC<IProductsListProps> = ({ products }) => (
  <div className='products-list'>
    {products?.map(product => (
      <ProductItem key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;