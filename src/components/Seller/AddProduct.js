import SellerSidebar from "./SellerSidebar";
function AddProduct(props){
    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4 col-12 mb-2'>
                    <SellerSidebar />    
                </div>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Product</h4>
                            <div className='card-body'>
                                <form>
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Category</label>
                                        <select className="form-control">
                                            <option>Dell</option>
                                            <option>Dell</option>
                                            <option>Dell</option>
                                        </select>
                                        <input type="text" class="form-control" id="title" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="title" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="price" class="form-label">Price</label>
                                        <input type="number" class="form-control" id="price" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control" rows="8" id="description"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="productImg" class="form-label">Product Images</label>
                                        <input type="file" class="form-control" id="productImg" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;