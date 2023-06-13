import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
function Orders(props){
    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4 col-12 mb-2'>
                    <Sidebar />    
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
                                        <td><button className="btn btn-primary btn-sm">Proccer</button></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                        <Link><img src="..." className="img-thumbnail" width='80' alt="..." /></Link>
                                        <p><Link>Django</Link></p>
                                        </td>
                                        <td>zar 500</td>
                                        <td><span className="text-success">Completed<i className="fa fa-check-circle"></i></span></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                        <Link><img src="..." className="img-thumbnail" width='80' alt="..." /></Link>
                                        <p><Link>Django</Link></p>
                                        </td>
                                        <td>zar 500</td>
                                        <td><span className="text-success">Completed<i className="fa fa-check-circle"></i></span></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                        <Link><img src="..." className="img-thumbnail" width='80' alt="..." /></Link>
                                        <p><Link>Django</Link></p>
                                        </td>
                                        <td>zar 500</td>
                                        <td><span className="text-danger">Canceled<i className="fa fa-times-circle"></i></span></td>
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

export default Orders;