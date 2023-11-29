import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/Homepage/Homepage';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import ProductDetails from './products/ProductDetails';
import CartPage from './cart/CartPage';
import SearchPage from './Components/Search/Search';
import './App.css';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='products'>
        <Route index element={<ProductsPage />} />
        <Route path=':id' element={<ProductDetails />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='cart' element={<CartPage />} />

    
    </Route>

    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);

export default App;
