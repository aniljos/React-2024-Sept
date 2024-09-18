import { createSlice } from "@reduxjs/toolkit"

const initState = {
    cart: []
}

// export const gadgetsReducer = (state=initState, action)=>{

//     //return the updated state
//     //{type:"add_to_cart", payload: {product: {}, quantity: 1}}

//     if(action.type === "add_to_cart"){

//         const copy_of_cart = [...state.cart];
//         const index = copy_of_cart.findIndex(item => item.product.id === action.payload.product.id);
//         if(index === -1){
//             copy_of_cart.push(action.payload);
//         }
//         else{
//             const item = copy_of_cart[index];
//             const item_c = {...item, quantity: item.quantity + 1};
//             copy_of_cart[index] = item_c
//         }
//         return {
//             cart: copy_of_cart
//         }
//     }

//     return state;

// }

const slice = createSlice({
    name: "gadgets",
    initialState: initState,
    reducers: {
        addToCart: (state, action) => {

            //state is mutable
            const index = state.cart.findIndex(item => item.product.id === action.payload.product.id);
            if(index === -1){
                state.cart.push(action.payload);
            }
            else{
                state.cart[index].quantity++;
            }
        },
        removeFromCart: () => {}
    }

});

export const {addToCart } = slice.actions;
export const gadgetsReducer = slice.reducer;

