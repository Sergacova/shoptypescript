import { useState, useEffect } from 'react';
import Cart from './Cart';
import { useCartProductsSelector } from '../store/cart.slice';


const CartPage = () => {
  const [isSubmitOrder, setIsSubmitOrder] = useState(false);

  const products = useCartProductsSelector();

  useEffect(() => {
    if (isSubmitOrder) {
     ;
    }
  }, [isSubmitOrder]);

  return (
    <div className='cart-page'>
      <h1>Shopping Cart</h1>
      {!isSubmitOrder ? (
        <Cart products={products} setIsSubmitOrder={setIsSubmitOrder} />
      ) : (
        <p>Thank you for your order!</p>
      )}
    </div>
  );
};

export default CartPage;
