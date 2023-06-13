import axios from "axios";
import { useState } from "react";
function Register(props){
    const baseUrl='http://127.0.0.1:8000/api';
    const[formError,setformError]=useState(false);
    const[errorMsg,seterrorMsg]=useState('');
    const[successMsg,setsuccessMsg]=useState('');
    const [registerFormData,setRegisterFormData]=useState({
        "first_name":'',
        "last_name":'',
        "username":'',
        "email":'',
        "mobile":'',
        "password":'',
    });

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]:event.target.value
        })

    };

    const submitHandler = (event) => {
        const formData=new formData();
        formData.append('first_name',registerFormData.first_name);
        formData.append('last_name',registerFormData.last_name);
        formData.append('username',registerFormData.username);
        formData.append('email',registerFormData.email);
        formData.append('mobile',registerFormData.mobile);
        formData.append('password',registerFormData.password);
        
        //Submit data
        axios.post(baseUrl+'customer/register/', formData)
        .then(function (response) {
            if (response.data.bool==false){
                seterrorMsg(response.data.msg);
                setsuccessMsg()
            }else{
                setRegisterFormData({
                "first_name":'',
                "last_name":'',
                "username":'',
                "email":'',
                "mobile":'',
                "password":'',
            });
                setformError();
                setsuccessMsg(response.data.msg);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    };

    const buttonEnable=(registerFormData.first_name!='') && (registerFormData.last_name!='')&& (registerFormData.username!='')
    (registerFormData.email!='') && (registerFormData.mobile!='') && (registerFormData.password!='') 


    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'> 
                        <h4 className='card-header'>Register</h4>
                            <div className='card-body'>
                            <p className="text-muted"><strong>Note:</strong>All fields are</p>
                            {successMsg && <p className="text-success">{successMsg}</p>}
                            {errorMsg && <p className="text-danger">{errorMsg}</p>}
                                <form>
                                    <div class="mb-3">
                                        <label for="firstName" class="form-label">First Name</label>
                                        <input type="text" onChange={inputHandler} value={registerFormData.first_name} name="first_name" class="form-control" id="firstName" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="lastName" class="form-label">Last Name</label>
                                        <input type="text" onChange={inputHandler} value={registerFormData.last_name} name="last_name" class="form-control" id="lastName" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="username" class="form-label">Username</label>
                                        <input type="text" onChange={inputHandler} value={registerFormData.username}  name="username" class="form-control" id="usename" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" onChange={inputHandler} value={registerFormData.email} name="email" class="form-control" id="email" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="mobile" class="form-label">Mobile</label>
                                        <input type="number" onChange={inputHandler} value={registerFormData.mobile} name="mobile" class="form-control" id="mobile" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="pwd" class="form-label">Password</label>
                                        <input type="password" onChange={inputHandler} value={registerFormData.password} name="password" class="form-control" id="pwd" />
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

export default Register;