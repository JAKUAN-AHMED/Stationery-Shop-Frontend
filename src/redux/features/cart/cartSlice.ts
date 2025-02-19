import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IcartItem{
    product:string,
    name:string,
    price:number,
    quantity:number,
    stock:number,
    image:string,
    userEmail?:string
}
interface cartState{
    items:IcartItem[],
    totalQuantity:number,
    totalPrice:number,
}

const initialState:cartState={
    items:[],
    totalQuantity:0,
    totalPrice:0
}
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<IcartItem>)=>{
            const existingItem=state.items.find((item)=>item.product===action.payload.product);

            if(existingItem){
               existingItem.quantity+=action.payload.quantity;
            }else{
                state.items.push(action.payload)
            }
            state.totalQuantity+=action.payload.quantity;
            state.totalPrice+=action.payload.price*action.payload.quantity;
        },
        updateQuantity:(state,action:PayloadAction<{id:string,quantity:number}>)=>{
            const {id,quantity}=action.payload;
            const existingItem=state.items.find((item)=>item.product===id);
            if(existingItem && quantity>0)
            {
                const diffrenceQ=quantity-existingItem.quantity;
                existingItem.quantity=quantity;
                state.totalQuantity+=quantity;
                state.totalPrice+=existingItem.price*diffrenceQ;
            }
        },
        removeFromCart:(state,action:PayloadAction<string>)=>{
            const itemId=action.payload;
            const existingItem=state.items.find((item)=>item.product===itemId);

            if(existingItem)
            {
                state.totalQuantity-=existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items=state.items.filter((item)=>item.product!==itemId);
            }
        },
        placeOrder:(state)=>{
            state.items.forEach((item)=>{
                item.stock=Math.max(0,item.stock-item.quantity);
            })
            //clear cart
            state.items=[];
            state.totalQuantity=0;
            state.totalPrice=0;
        },

    }
})

export const {addToCart,updateQuantity,removeFromCart,placeOrder}=cartSlice.actions;
export default cartSlice.reducer; 