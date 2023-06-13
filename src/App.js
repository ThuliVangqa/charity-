//Assets
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//website
import Home from './components/Home';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import AllProducts from './components/AllProducts';
import TagProducts from './components/TagProducts';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import ConfirmOrder from './components/ConfirmOrder';
import OrderFailure from './components/OrderFailure';
import CategoryProducts from './components/CategoryProducts';
import OrderSuccess from './components/OrderSuccess';


//Customer panel
import Register from './components/customer/Register';
import Login from './components/Customer/Login';
import CustomerLogout from './components/Customer/CustomerLogout';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';
import Wishlist from './components/Customer/Wishlist';
import Profile from './components/Customer/Profile';
import ChangePassword from './components/Customer/ChangePassword';
import AddressList from './components/Customer/AddressList';
import AddAddress from './components/Customer/AddAddress';


//Seller panel
import SellerRegister from './components/Seller/SellerRegister';
import SellerLogin from './components/Seller/SellerLogin';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';
import VendorOrders from './components/Seller/VendorOrders';
import Customers from './components/Seller/Customers';
import Reports from './components/Seller/Reports';
import VendorProfile from './components/Seller/VendorProfile';
import VendorChangePassword from './components/Seller/VendorChangePassword';


import { cartContext } from './Context';
import { useState } from 'react';
const checkCart=localStorage.getItem('cartData')
const[cartData,setCartData]=useState(JSON.parse(checkCart))
function App() {
  return (
    <cartContext.Provider value={{cartData,setCartData}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products' element={<ProductDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirm-order' element={<ConfirmOrder />} />
        <Route path='/order/success' element={<OrderSuccess />} />
        <Route path='/order/failure' element={<OrderFailure />} />
        <Route path='/category/:tag' element={<TagProducts />} />
        <Route path='/products/:category_slug/:category_id' element={<CategoryProducts />} />
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />
        
        {/* Customer Routes */}
        <Route path='/customer/register' element={<Register />} />
        <Route path='/customer/login' element={<Login />} />
        <Route path='/customer/logout' element={<CustomerLogout />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        <Route path='/customer/orders' element={<Orders />} />
        <Route path='/customer/wishlist' element={<Wishlist />} />
        <Route path='/customer/profile' element={<Profile />} />
        <Route path='/customer/changepassword' element={<ChangePassword />} />
        <Route path='/customer/addresses' element={<AddressList />} />
        <Route path='/customer/add-addresses' element={<AddAddress />} />
        {/* Seller Routes */}
        <Route path='/seller/register' element={<SellerRegister />} />
        <Route path='/seller/login' element={<SellerLogin />} />
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        <Route path='/seller/products' element={<SellerProducts />} />
        <Route path='/seller/add-product' element={<AddProduct />} />
        <Route path='/seller/orders' element={<VendorOrders />} />
        <Route path='/seller/customers' element={<Customers />} />
        <Route path='/seller/reports' element={<Reports />} />
        <Route path='/seller/profile' element={<VendorProfile />} />
        <Route path='/seller/change-password' element={<VendorChangePassword />} />
        
      </Routes>
    </> 
    
  );
}

export default App;