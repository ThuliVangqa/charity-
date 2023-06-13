import axios from "axios";
import { useState } from "react";
function Login(props){
    const baseUrl='http://127.0.0.1:8000/api';
    const[formError,setformError]=useState(false);
    const[errorMsg,seterrorMsg]=useState('');
    const [loginFormData,setLoginFormData]=useState({
        "username":'',
        "password":''
    });

    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]:event.target.value
        })

    };

    const submitHandler = (event) => {
        const formData=new formData();
        formData.append('username',loginFormData.username);
        formData.append('password',loginFormData.password);
        
        //Submit data
        axios.post(baseUrl+'customer/login/', formData)
        .then(function (response) {
            if (response.data.bool==false){
                setformError(true);
                seterrorMsg(response.data.msg)
            }else{
                localStorage.setItem('customer_id',response.data.id);
                localStorage.setItem('customer_login',true);
                localStorage.setItem('customer_username',response.data.user);
                setformError(false);
                seterrorMsg();
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    };

    const checkCustomer=localStorage.getItem('customer_login');
    if(checkCustomer){
        window.location.href='/customer/dashboard';
    }

    const buttonEnable=(loginFormData.username!='') && (loginFormData.password!='')

    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Login</h4>
                            <div className='card-body'>
                                {formError &&
                                    <p className="text-danger">{errorMsg}</p>
                                }
                                <form>
                                    <div class="mb-3">
                                        <label for="username"  class="form-label">Username</label>
                                        <input type="text" name="username" value={loginFormData.username} onChange={inputHandler} class="form-control" id="usename" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="pwd" class="form-label">Password</label>
                                        <input type="password" name="password" value={loginFormData.password} onChange={inputHandler} class="form-control" id="pwd" />
                                    </div>
                                    <button type="button" disabled={!buttonEnable} onClick={submitHandler} class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;