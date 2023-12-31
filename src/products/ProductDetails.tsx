import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useGetProductQuery } from '../store/productapi';
import AddToCartBtn from '../cart/AddToCartBtn';
import Loading from '../Components/Loading/Loading';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import './products.css';
type ProductParamsId = {
  id: string;
};

const ProductDetails = () => {
  const { id } = useParams() as ProductParamsId;
  const { data: product, isLoading } = useGetProductQuery({ id });

  if (isLoading) return <Loading />;
  if (!product) return <p>Product not found</p>;

  const { title, description, price, rating, category, stock, images, id: productId } = product;

  return (
    <div className='product-details'>
      <h1>{title}</h1>
      <div className='product-details__pics'>
      {images.map(image => (
        <img
                    key={image}
                    src={image}
                    alt={title} />     
          ))}
      </div>
      <div className='product-details__description'>
        <p>{description}</p>
      </div>
      <div className='product-details__category'>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>
      <div className='product-details__price'>
        <p>
          <strong>Price:</strong> {price}$
        </p>
      </div>
      <div className='product-details__rating'>
        <div className='product-rating'>
          <strong>Rating:</strong>
          <StarIcon />
          {rating}
        </div>
        <div className='product-details__stock'>
          <div className='product-stock'>
            <strong>Item shop:</strong>
<LocalGroceryStoreIcon/>
        {stock}
        </div>
      </div>
      </div>
      <AddToCartBtn id={productId}>Add to cart</AddToCartBtn>
    </div>
  );
};

export default ProductDetails;
