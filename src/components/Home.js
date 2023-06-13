import {Link} from 'react-router-dom';
import SingleProduct from "./SingleProduct";
function Home(){
  const products=[
      {
          'titile':'Product 1',
          'price':1000
      },
      {
        'titile':'Product 2',
        'price':1000
      },
      {
        'titile':'Product 3',
        'price':1000
      },
  ]
    return(
      <main className='mt-4'>
        <div className='container'>
          <h3 className='mb-4'>Latest Products <Link to='/products' className='float-end btn btn-sm btn-dark m-2'>View All Product</Link></h3>
          <div className='row mb-4'>
              {
                  products?.map((product) => <SingleProduct product={product} />)
              }
          </div>    
        </div>
      </main>
    );
}

export default Home;