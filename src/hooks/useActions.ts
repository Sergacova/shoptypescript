import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {productSlice} from '../store/product.slice';
import {cartSlice} from '../store/cart.slice';

const AllActions = {

  ...productSlice.actions,
  ...cartSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators (AllActions, dispatch);
};

export default useActions;
