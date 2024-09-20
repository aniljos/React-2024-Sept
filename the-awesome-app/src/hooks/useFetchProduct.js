import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchProducts(url){

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const abortController = new AbortController();

    useEffect(() => {
        fetchProducts();

        return () => {
            if(abortController.signal){
                abortController.abort();
            }
        }

    }, [])

    async function fetchProducts(){
        try {
            setIsLoading(true);
            setErrorMessage(null);
            await new Promise(resolve => setTimeout(()=>{resolve()}, 500));
            const response = await axios.get(url, {signal: abortController.signal});
            setProducts(response.data);

        } catch (error) {
            setErrorMessage("Failed to fetch the products");
        }
        finally{
            setIsLoading(false);
        }
    }

    return {products, setProducts, isLoading, errorMessage}
}