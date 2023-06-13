import SellerSidebar from "./SellerSidebar";
function Customers(props){
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>John@gmail.com</td>
                                        <td>072 111 5555</td>
                                        <td><button className="btn btn-primary btn-sm">Remove</button></td>  
                                        <td><button className="btn btn-primary btn-sm ms-1">Orders</button></td>  
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>John@gmail.com</td>
                                        <td>072 111 5555</td>
                                        <td><button className="btn btn-primary btn-sm">Orders</button></td>
                                        <td><button className="btn btn-danger btn-sm ms-1">Remove</button></td>           
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

export default Customers;