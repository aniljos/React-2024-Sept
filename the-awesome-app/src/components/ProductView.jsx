// <ProductView product={product} onDelete={} onEdit={}/>

import React from "react";

function ProductView(props) {

    const { product, onDelete, onEdit } = props;
    console.log("rendering ProductView ", product.id);

    function handleDelete(){

        if(onDelete){
            onDelete(product)
        }
    }
    function handleEdit(){
        
        if(onEdit){
            onEdit(product)
        }
    }
  
  return (
    <div className="product">
      <p>Id: {product.id}</p>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <div>
        <button onClick={handleDelete}>Delete</button>&nbsp;
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}

export default React.memo(ProductView);
