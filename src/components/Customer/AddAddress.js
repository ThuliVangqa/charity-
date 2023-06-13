function AddAddress(props){
    return(
       <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Address</h4>
                            <div className='card-body'>
                                <form>
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Address</label>
                                        <textarea class="form-control" id="address" ></textarea>
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

export default AddAddress;