import {Link} from 'react-router-dom';
import SingleProduct from "./SingleProduct";
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';

function TagProducts(props){
    const baseUrl='http://127.0.0.1:8000/api';
    const [products,setProducts]=useState([])
    const [totalResult,setTotalResult]=useState(0);
    const {tag} =useParams();

    useEffect(() => {
        fetchData(baseUrl+'/products/'+tag);
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.results);
            setTotalResult(data.count)   
        });
    }

    function changeUrl(baseurl){
        fetchData(baseurl);

    }

    var links=[]
    for(let i=1; i<=totalResult; i++){
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+'/products/${tag}/page=${i}')} to={'/products/${tag}/?page=${i}'} class="page-link" href="#">{1}</Link></li>)
    }

    return (
        <section className="container mt-4">
            <h3 className='mb-4'>All Products <a href='#' className='float-end btn btn-sm btn-dark m-2'>View All Product</a></h3>
            <div className='row mb-4'>
                {
                    products?.map((product) => <SingleProduct product={product} />)
                }
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {links}
                </ul>
            </nav>
            
        </section>
    )
}

export default TagProducts;