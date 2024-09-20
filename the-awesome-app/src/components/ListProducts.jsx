import { useCallback, useEffect, useMemo, useState } from "react";
import axios from 'axios';
import './ListProducts.css'
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useFetchProducts } from "../hooks/useFetchProduct";
import ProductView from "./ProductView";


const baseUrl = "http://localhost:9000/products";

function ListProducts(){

  
    
    const navigate = useNavigate();
    const {products, setProducts, isLoading, errorMessage} =  useFetchProducts(baseUrl);
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    
    const deleteProduct = useCallback( async (product) => {

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


    }, [products])

    const editProduct = useCallback( (product)=> {
        
        navigate(`/products/${product.id}`);

    }, []);

    function renderProducts(){

        const jsx = products.map(product => {

            return (
                // <div key={product.id} className="product">
                //     <p>Id: {product.id}</p>
                //     <p>{product.name}</p>
                //     <p>{product.description}</p>
                //     <p>Price: {product.price}</p>
                //     <div>
                //         <button onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                //         <button onClick={() => {editProduct(product)}}>Edit</button>
                //     </div>
                // </div>
                <ProductView key={product.id} product={product} 
                                            onDelete={deleteProduct} onEdit={editProduct}/>
            )

        });
        return jsx;
    }


    const calcPrices =useMemo( () => {
        
        console.log("calcPrices invoked");
        let totalPrice = 0;

        products.forEach(item => {
            totalPrice+=item.price;
        })
        return totalPrice;
    }, [products]);

    return (
        <div>
            <h4>List Products</h4>

            <div>Total Price: {calcPrices}</div>

            {isLoading? <div className="alert alert-info">Loading...</div>: null}
            {errorMessage? <div className="alert alert-warning">{errorMessage}</div>: null}

            {isMessageVisible? <div className="alert alert-info">This is a test message</div> : null}
            <button className="btn btn-info" onClick={() => setIsMessageVisible(p => !p)}>Toggle Message</button>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {renderProducts()}
            </div>
        </div>
    )
}

export default ListProducts;