//Packages
import {Link} from 'react-router-dom';
function SellerLogin(props){
    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Register</h4>
                            <div className='card-body'>
                                <form>
                                    <div class="mb-3">
                                        <label for="username" class="form-label">Username</label>
                                        <input type="text" class="form-control" id="usename" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="pwd" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="pwd" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerLogin;