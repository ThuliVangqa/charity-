import {Link} from 'react-router-dom';
import SingleProduct from "./SingleProduct";
import {useState,useEffect} from 'react';


function AllProducts(){
    const baseUrl='http://127.0.0.1:8000/api';
    const [products,setProducts]=useState([])
    const [totalResult,setTotalResult]=useState(0);

    useEffect(() => {
        fetchData(baseUrl+'/products');   
    });

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
    var limit=12;
    var totallinks=totalResult/limit;
    for(let i=1; i<=totallinks; i++){
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+'/products/?page=${i}')} to={'/products/?page=${i}'} class="page-link" href="#">{1}</Link></li>)
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

export default AllProducts;