import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {useState,useEffect, useContext} from 'react';
import SingleRelatedProduct from "./SingleRelatedProduct";
import { UserContext, CartContext } from "../Context";
function ProductDetail(){
    const baseUrl='http://127.0.0.1:8000/api';
    const [productData,setproductData]=useState([]);
    const [productImgs,setproductImgs]=useState([]);
    const [productTags,setproductTags]=useState([]);
    const [relatedProducts,setRelatedProducts]=useState([]);
    const {product_slug, product_id} =useParams();
    const [cartButtonClickStatus,setcartButtonClickStatus]=useState(false);
    const {cartData,setCartData}=useContext(CartContext);

    useEffect(() => {
        fetchData(baseUrl+'/product/'+ product_id);
        fetchRelatedData(baseUrl+'/related-products/' +product_id);
        checkProductInCart(product_id);
        //localStorage.removeItem('cartData');  
    });

    function checkProductInCart(product_id){
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);
        if(cartJson!=null){
            cartJson.map((cart) =>{
                if(cart!=null && cart.product.id == product_id){
                    setcartButtonClickStatus(true)

                }
            })
        }
    }

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setproductData(data);
            setproductImgs(data.product_imgs);
            setproductTags(data.tag_list); 
        });
    }

    function fetchRelatedData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setRelatedProducts(data.results); 
        });
    }


    const tagsLink=[]
    for(let i=0; i<productTags.length; i++){
        let tag=productTags[i].trim();
        tagsLinks.push(<Link className="badge bg-secondary text-white me-1" to={'/products/${tag}'}>{tag}</Link>)
    }
    
    const cartAddButtonHandler = () =>{
        let previousCart=localStorage.getItem('cartString');
        let cartJson=JSON.parse(previousCart);
        const cartData=[
            {
                'product':{
                    'id':productData.id,
                    'title':productData.title,
                    'price':productData.price,
                    'image':productData.image,
                },
                'user':{
                    'id':1
                }
            }
        ];
        if(cartJson!=null){
            cartJson.push(cartData);
            var cartString=JSON.stringify(cartJson);
            localStorage.setItem('cartData',cartString);
        }else{
            var newCartList=[];
            newCartList.push(cartData)
            var cartString=JSON.stringify(newCartList)
            localStorage.setItem('cartData',cartString);
        }
        cartButtonClickStatus(true); 
    }

    const cartRemoveButtonHandler = () =>{
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);
        cartJson.map((cart,index)=>{
            if(cart!=null && cart.product.id == productData.id){
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
        <section className="container">
            <div className="row">
                <div className="col-4">
                <div id="productThumbnailSlider" className="carousel carousel-dark carousel-fade slide">
                    <div className="carousel-indicators">
                        {productImgs.map((img,index)=>{
                            if(index === 0){
                                return <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            }else{
                                return <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            }

                        })}
                    </div>
                    <div className="carousel-inner">
                    {productImgs.map((img,index)=>{
                            if(index==0){
                                return <div className="carousel-item active">
                                    <img src="..." className="card-img-top img-thumbnail mb-5" alt="..." />
                                </div>
                            }else{
                                return <div className="carousel-item active">
                                    <img src="..." className="card-img-top img-thumbnail mb-5" alt="..." />
                                </div>
                            }

                        })}
                        
                        <div className="carousel-item">
                            <img src="..." className="card-img-top img-thumbnail mb-5" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="card-img-top img-thumbnail mb-5" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
                <div className="col-8">
                    <h3>{productData.title}</h3>
                    <p>{productData.detail}</p>
                    <p className="mt-3">
                        <a title="Demo" href={productData.demo_url} target="_blank" className="btn btn-dark">
                            <i className="fa-solid fa-cart-plus"></i>Demo
                        </a>
                        <h5 className="card-title text-primary"><span className='text-muted'>Price: {productData.price}</span></h5>
                        {!cartButtonClickStatus &&
                        <button title="Add to cart" type='button' onClick={cartAddButtonHandler} className="btn btn-primary ms-1">
                            <i className="fa-solid fa-cart-plus"></i>Add to cart
                        </button>
                        }
                        {!cartButtonClickStatus &&
                        <button title="Remove from cart" type='button' onClick={cartRemoveButtonHandler} className="btn btn-primary ms-1">
                            <i className="fa-solid fa-cart-plus"></i>Remove from cart
                        </button>
                        }
                        <button title="Buy now" className="btn btn-primary ms-1">
                            <i className="fa-solid fa-bag-shopping"></i>Buy now
                        </button>
                        <button title="Add to wishlist" className="btn btn-primary ms-1">
                            <i className="fa-solid fa-heart"></i>Add to wishlist
                        </button>
                    </p>
                    <div className="producttages mt-4">
                        <h5>Tages</h5>
                        <p>
                            <Link to="#" >Python</Link>
                            {tagsLinks}
                        </p>
                    </div>
                </div>
            </div>
            {/* Related product*/}
            <h3 className="mt-5 mb-3 text-center">Related Products</h3>
            <div id="relatedProductsSlider" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    {relatedProducts.map((product,index)=>{
                        if(index==0){
                            return <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            }else{
                                return <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            }

                    })}
                </div>
                <div className="carousel-inner">
                        {relatedProducts.map((product,index)=>{
                            if(index==0){
                                return <div className="carousel-item active">
                                    <SingleRelatedProduct product={product} />
                                </div>
                            }else{
                                return <div className="carousel-item active">
                                    <SingleRelatedProduct product={product} />        
                                </div>
                            }

                        })}
                </div>
            </div>
            {/* Related product end*/}

            {relatedProducts.length > 0 &&

                <>
                    <h3 className="mt-5 mb-3 text-center">Related Products</h3>
                    <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="true">
                    </div>    
                </>
            
            }
        </section>

    );
}
export default ProductDetail;