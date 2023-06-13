import {Link} from 'react-router-dom';
import { UserContext, useContext } from 'react';
import { UserContext, CartContext } from '../Context';
function Navbar(){
    const UserContext=UserContext(UserContext);
    const {cartData,setCartData}=useContext(CartContext)
   return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/categories">Categories</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Account
                        </a>
                        <ul class="dropdown-menu">
                            <li><Link className="dropdown-item" to='/customer/register'>Register</Link></li>
                            <li><Link className="dropdown-item" to='/customer/login'>Login</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to='/customer/dashboard'>Dashboard</Link></li>
                            <li><Link className="dropdown-item" to='/customer/dashboa'>Logout</Link></li>

                        </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkout">My cart({cartData.lenth})</Link>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Vendor Panel
                        </a>
                        <ul class="dropdown-menu">
                            {userContext != 'true' &&
                                <>
                                    <li><Link className="dropdown-item" to='/seller/register'>Register</Link></li>
                                    <li><Link className="dropdown-item" to='/seller/login'>Login</Link></li>
                                </>
                            }
                            {userContext == 'true' &&
                                <>
                                    <li><Link className="dropdown-item" to='/seller/dashboard'>Dashboard</Link></li>
                                    <li><Link className="dropdown-item" to='/seller/dashboa'>Logout</Link></li>
                                </>
                            }
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/checkout">New Orders</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
   );
}

export default Navbar;

