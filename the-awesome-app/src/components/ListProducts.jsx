import { useEffect, useState } from "react";
import axios from 'axios';
import './ListProducts.css'
import {useNavigate} from 'react-router-dom';

const baseUrl = "http://localhost:9000/products";
function ListProducts(){

    const [products, setProducts] = useState([]);
    useEffect(() => {

        //fetchProducts();
        fetchProductsAsync();

    }, [])
    const navigate = useNavigate();

    function fetchProducts(){

        axios.get(baseUrl)
                    // .then(sucessCallback, errorCallback);
                    .then((response) => {
                        console.log("success", response);
                    }, (errorResponse) => {
                        console.log("error", errorResponse);
                    });
    }
    async function fetchProductsAsync(){

        try {
            
            const response = await axios.get(baseUrl);
            //success
            console.log("success", response);
            setProducts(response.data);
          

        } catch (errorResponse) {
            //error
            console.log("error", errorResponse);
        }
    }

    async function deleteProduct(product){

        //const url = baseUrl + "/" + product.id;
        const url = `${baseUrl}/${product.id}`;
        try {
            
            await axios.delete(url);
            //await fetchProductsAsync();

            //copy of products
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }
            



            alert(`product with id: ${product.id} deleted`);


        } catch (error) {
            alert(`product with id: ${product.id} not found`);
        }


    }

    function editProduct(product){
        
        navigate(`/products/${product.id}`);
    }

    function renderProducts(){

        const jsx = products.map(product => {

            return (
                <div className="product">
                    <p>Id: {product.id}</p>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <div>
                        <button onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                        <button onClick={() => {editProduct(product)}}>Edit</button>
                    </div>
                </div>
            )

        });
        return jsx;
    }

    return (
        <div>
            <h4>List Products</h4>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {renderProducts()}
            </div>
        </div>
    )
}

export default ListProducts;