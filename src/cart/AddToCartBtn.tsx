import { FC } from 'react';
import useActions from '../hooks/useActions';
import { useProductByIdSelector } from '../store/product.slice';
interface IAddToCartBtnProps {
  id: number;
  children?: React.ReactNode;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({ id, children }) => {
  const { addToCartProduct } = useActions();

  const product = useProductByIdSelector(id);
  const { title, price, thumbnail } = product!;

  const addToCartHandler = (productId: number) => {
    const cartProduct = {
      id: productId,
      quantity: 1,
      product: {
        id: productId,
        title,
        price,
        thumbnail,
      },
    };

    addToCartProduct(cartProduct);
  };

  return (
    <button
      className='add-to-cart-btn'
      type='button'
      data-product-id={id}
      onClick={() => addToCartHandler(id)}
    >
      {children}
    </button>
  );
};

export default AddToCartBtn;
