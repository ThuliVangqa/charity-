import {Link} from 'react-router-dom';
function Sidebar(){
    return (
        <div class="list-group">
            <Link to="/customer/dashboad" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/customer/orders" className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/customer/wishlist" className="list-group-item list-group-item-action">Wishlist</Link>
            <Link to="/customer/profile" className="list-group-item list-group-item-action">Profile</Link>
            <Link to="/customer/changepassword" className="list-group-item list-group-item-action">change Password</Link>
            <Link to="/customer/addresses" className="list-group-item list-group-item-action">Addresses</Link>
            <Link to="/customer/add-addresses" className="list-group-item list-group-item-action">Add Addresses</Link>
            <Link className="list-group-item list-group-item-action text-danger">Logout</Link>
        </div>

    )
}
export default Sidebar;