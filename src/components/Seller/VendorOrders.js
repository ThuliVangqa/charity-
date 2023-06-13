import SellerSidebar from "./SellerSidebar";
import {Link} from 'react-router-dom';
function VendorOrders(props){
    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4 col-12 mb-2'>
                    <SellerSidebar />    
                </div>
                <div className='col-md-8 col-12 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Statu</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                        <Link><img src="..." className="img-thumbnail" width='80' alt="..." /></Link>
                                        <p><Link>Django</Link></p>
                                        </td>
                                        <td>zar 500</td>
                                        <td><span className="text-warning">Completed<i className="fa fa-spin fa-spinner"></i></span></td>
                                        <td>
                                           <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Statu
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                        <Link><img src="..." className="img-thumbnail" width='80' alt="..." /></Link>
                                        <p><Link>Django</Link></p>
                                        </td>
                                        <td>zar 500</td>
                                        <td><span className="text-warning">Completed<i className="fa fa-spin fa-spinner"></i></span></td>
                                        <td>
                                           <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Statu
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorOrders;