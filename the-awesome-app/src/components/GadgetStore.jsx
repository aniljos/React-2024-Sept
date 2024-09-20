import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart as addToGadgetStore } from "../state/redux/gadgetsReducer";
import { useTitle } from "../hooks/useTitle";

function GadgetStore() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useTitle("Gadgets");

  useEffect(() => {
    fetchProductsAsync();
  }, []);

  async function fetchProductsAsync() {
    try {
      const url = "http://localhost:9000/products";
      const response = await axios.get(url);
      //success
      console.log("success", response);
      setProducts(response.data);
    } catch (errorResponse) {
      //error
      console.log("error", errorResponse);
    }
  }

  function addToCart(product){

    //dispatch({type: 'add_to_cart', payload: {product, quantity: 1}});
    dispatch(addToGadgetStore({product, quantity: 1}));
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {products.map((item, index) => {
        return (
          <div className="col" key={index}>
            <div className="card border-warning">
              <div className="card-body text-success">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text text-primary">INR {item.price}</p>
                <button className="btn btn-primary"onClick={(e) => addToCart(item)}>Add To Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GadgetStore;
