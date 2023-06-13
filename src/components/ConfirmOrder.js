import { useState } from 'react';
import { useContext } from 'react';
import { UserContext} from '../Context';
import { cartContext } from '../Context';
import axios from 'axios';
function ConfirmOrder(){
    const[ConfirmOrder,SetConfirmOrder]=useState(false);
    const[orderId,SetorderId]=useState('');
    const[PayMethod,SetPayMethod]=useState('');
    //const[OrderStatus,SetOrderStatus]=useState(false);
    const userContext=useContext(UserContext);
    const {cartData,setCartData}=useContext(cartContext);
    if(userContext.login==null){
        window.location.href="/customer/login"
    }else{
        if(ConfirmOrder==false){
            addOrderInTable();
        }
    }

    function addOrderInTable(){

        const customerId=localStorage.getItem('customer_id');
        const formData=new FormData();
        formData.append('customer',customerId);

        axios.post(baseUrl+'/orders/',formData)
        .then(function (response){
            var orderId=response.data.id;
            SetorderId(orderId)
            orderIterms(orderId)
            SetConfirmOrder(true);
        })
        .catch(function (error){
            console.log(error);       
        });
                    
    }

    function orderIterms(orderId){
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);

        if(cartJson!=null){
            cartJson.map((cart)=>{
                const formData=new FormData();
                formData.append('order',orderId);
                formData.append('product',cart.product.id);
                formData.append('qty',1);
                formData.append('price',product_price);


                axios.post(baseUrl+'/orderiterms/',formData)
                .then(function (response){
                    //Remove cart items
                    cartJson.splice(index,1);
                    localStorage.setItem('cartData',JSON.stringify (cartJson))
                    setCartData(cartJson);
                })
                .catch(function (error){
                    console.log(error);       
                });
        
            });
        }
       
    }

    function changePaymentMethod(payMethod){
        SetPayMethod(payMethod);
    }

    function PayNowButton(){
        if(PayMethod!=''){
            changePaymentMethod(PayMethod);
        }else{
            alert('Select Payment Method!! ')
        }
        
    }

    return(
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 offset-4'>
                    <div className='card py-3 text-center'>
                        <h3><i className='fa fa-circle text-success'></i>Your order has been confirmed</h3>
                        <h5>ORDER ID: {orderId}</h5>
                    </div>
                    <div className='card p-3 mt-4'>
                        <form>
                            <div className='form-group'>
                                <label>
                                    <input type="radio" onChange={()=>changePaymentMethod('paypal')} name='payMethod' /> Paypal
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <input type="radio" onChange={()=>changePaymentMethod('paypal')} name='payMethod' /> Stripe
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <input type="radio" onChange={()=>changePaymentMethod('paypal')} name='payMethod' /> Another
                                </label>
                            </div>
                            <button type="button" onClick={PayNowButton} className='btn btn-sm btn-success mt-3'>Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ConfirmOrder;