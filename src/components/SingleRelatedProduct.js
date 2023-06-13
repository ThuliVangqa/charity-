import {Link} from 'react-router-dom';
function SingleRelatedProduct(props){
    return(
        <div className='col-3 offset-4 mb-4'>
            <div className="card">
                <Link to={'/product/${props.product.title}/${props.product.id}'}>
                    <img src={props.product.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={'/product/${props.product.title}/${props.product.id}'}>{props.product.title}</Link></h5>
                    <h5 className="card-title">R {props.product.price}</h5>
                    <div className='card-footer'>
                    Product Downloads
                    </div>
                </div>
            </div> 
        </div>        
    );
}

export default SingleRelatedProduct;