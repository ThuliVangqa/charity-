//Packages
import {Link} from 'react-router-dom';
import { useContext,useState } from 'react';
import { cartContext } from '../Context';
function Checkout(props){   
    const {cartData,setCartData}=useContext(cartContext);
    const [cartButtonClickStatus,setcartButtonClickStatus]=useState(false);
    const [productData,setproductData]=useState([]);
    if(cartData == null || cartData.length==0){
        var cartIterm=0
    }else{
        var cartIterm=cartData.length;
    }

    var sum=0;
    cartData.map((item,index)=>{
        sum+=parseFloat(item.product.price);
    });

    const cartRemoveButtonHandler = (product_id) =>{
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);
        cartJson.map((cart,index)=>{
            if(cart!=null && cart.product.id == productData.id == product_id){
                //delete cartJson[index];
                cartJson.splice(index,1);
            }
        });

        var cartString=JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString)
        setcartButtonClickStatus(false);
        setCartData(cartJson);
    }

    return(
       <div className='container mt-4'>
            <h3 className='mb-4'>All Items (cartIterm)</h3>
            {cartIterm!=0 &&
            <div className='row'>
                <div className='col-12'>
                    <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartIterm &&
                                cartData.map((item,index)=>{
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                            <Link><img src={item.product.image} className="img-thumbnail" width='80' alt={item.product.title} /></Link>
                                            <p><Link>{item.product.title}</Link></p>
                                            </td>
                                            <td>zar {item.product.price}</td>
                                            <td>                
                                                <button title="Remove from cart" type='button' onClick={()=>cartRemoveButtonHandler(item.product.id)} className="btn btn-primary ms-1">
                                                    <i className="fa-solid fa-cart-plus"></i>Remove from cart
                                                </button>
                                            </td>
                                        </tr> 
                                    ) 
                                })
                            }
                           
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>R. 500</th>
                            </tr>
                            <tr>
                                <td colSpan='3' align='center'>
                                    <Link to='/categories' className='btn btn-secondary'>Continue Shopping</Link>
                                    <Link to='/confirm-order' className='btn btn-primary ms-1'>Proceed To payment</Link>
                                </td>
                            </tr>
                        </tfoot>

                    </table>

                </div>
                </div>
            </div>
            }
            {cartIterm==0 &&
                <Link to='/categories' className='btn btn-secondary'>Home</Link>
            }
       </div>
    )
}

export default Checkout;