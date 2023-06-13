//Packages
import {Link} from 'react-router-dom';
function SingleProduct(props){
    return(
        <div className='col-12 col-md-3 mb-4'>
            <div className="card">
                <Link to={'/product/${props.product.title}/${props.product.id}'}>
                    <img src={props.product.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={'/product/${props.product.slug}/${props.product.id}'}>{props.product.title}</Link></h5>
                    <h5 className="card-title">R {props.product.price}</h5>
                    <div className='card-footer'>
                    Product Downloads
                    </div>
                </div>
                <div>
                    <button title="Add to cart" className='btn btn-success btn-sm'><i className='fa-solid fa-cart-plus'></i></button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'><i className='fa-solid fa fa-heart'></i></button>
                </div>
            </div> 
        </div>        
    );
}

export default SingleProduct;