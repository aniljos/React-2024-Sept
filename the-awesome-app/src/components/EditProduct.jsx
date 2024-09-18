import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

// /products/:id
function EditProduct(){

    const params = useParams();
    const [product, setProduct] = useState({id: 0, name: "", price: 0, description: ""});
    const productRef = useRef(product);
    const navigate = useNavigate();

    useEffect(() => {

        fetchProduct();
        
        
    }, [])

    

    async function fetchProduct(){

        try {
            
            const response = await axios.get(`http://localhost:9000/products/${params.id}`);
            setProduct(response.data);

        } catch (error) {
            alert("Failed to fetch the product");
        }
    }

    function handleNameChange(evt){

        setProduct({...product, name: evt.target.value});
    }

    async function save(){

        try {
            
            await axios.put(`http://localhost:9000/products/${params.id}`, product);
            navigate(-1);

        } catch (error) {
            alert("Failed to update the record");
        }

    }
    function cancel(evt){

        evt.preventDefault();
        navigate(-1);
    }

  

    return (
        <div>
            <h4>Edit Product: Id: {params.id}</h4>

            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input className='form-control' id="name" value={product.name} onChange={handleNameChange}/>    
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>Price</label>
                    <input className='form-control' id="price" 
                                type='number' value={product.price} 
                                onChange={e => setProduct({...product, price: Number(e.target.value)})} />    
                </div>
                <div className='form-group'>
                    <label htmlFor='desc'>Description</label>
                    <input className='form-control' id="desc" value={product.description}
                                onChange={e => setProduct({...product, description: e.target.value})}/>    
                </div>
                <br/>
                <div>
                    <button type="button" className='btn btn-success' onClick={save}>Save</button>&nbsp;
                    <button className='btn btn-warning' onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;