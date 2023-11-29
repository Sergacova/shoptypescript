import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {productSlice} from '../store/productSlice';
import {cartSlice} from '../store/cartSlice';

const AllActions = {

  ...productSlice.actions,
  ...cartSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators (AllActions, dispatch);
};

export default useActions;
