import { useEffect, useState } from "react";
import axios from 'axios';
import './ListProducts.css'
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";


const baseUrl = "http://localhost:9000/secure_products";

function ListProducts(){

    const [products, setProducts] = useState([]);
    const authState = useSelector(state => state.auth);

    useEffect(() => {
        console.log("useeffect without dep array")
    })

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

        if(!authState.isAuthenticated){
            navigate("/login");
            return;
        }

        try {
            const headers = { Authorization: `Bearer ${authState.accessToken}`};
            const response = await axios.get(baseUrl, {headers} );
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
            
            const headers = { Authorization: `Bearer ${authState.accessToken}`};
            await axios.delete(url, {headers});
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
                <div key={product.id} className="product">
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

            <div className="alert alert-info">
                Welcome {authState.user}
            </div>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {renderProducts()}
            </div>
        </div>
    )
}

export default ListProducts;