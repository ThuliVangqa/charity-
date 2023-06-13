import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
function AddressList(props){
    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4 col-12 mb-2'>
                    <Sidebar />    
                </div>
                <div className='col-md-8 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link className='btn btn-outline-success mb-2' to="/customer/add-address"><i className='fa fa-plus-circle'></i>Add Address</Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mb-4'>
                            <div className='card bg-primary text-white text-muted'>
                                <div className='card-body'>
                                    <p><i className='fa fa-check-circle fa-2x text-success'></i></p>
                                    <h6>
                                        <button className='badge bg-dark mb-2'>Mark default</button>
                                        123 Maude
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                <h6>
                                    <button className='badge bg-dark mb-2'>Mark default</button>
                                    123 Maude
                                </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                <h6>
                                    <button className='badge bg-dark mb-2'>Mark default</button>
                                    123 Maude
                                </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                <h6>
                                    <button className='badge bg-dark mb-2'>Mark default</button>
                                    123 Maude
                                </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressList;