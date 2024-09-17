import {useParams} from 'react-router-dom';

// /products/:id
function EditProduct(){

    const params = useParams();

    return (
        <div>
            <h4>Edit Product: Id: {params.id}</h4>

            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input className='form-control' id="name"/>    
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>Price</label>
                    <input className='form-control' id="price" type='number'/>    
                </div>
                <div className='form-group'>
                    <label htmlFor='desc'>Description</label>
                    <input className='form-control' id="desc"/>    
                </div>
                <br/>
                <div>
                    <button className='btn btn-success'>Save</button>&nbsp;
                    <button className='btn btn-warning'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;