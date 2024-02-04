import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData:[],
  userInfo : null
};


const bazarSlice = createSlice({
    name:'bazar',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            
            const item = state.productData.find((item)=>item._id === action.payload._id)
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
            
            
        },
        deleteCartItme:(state,action)=>{
            state.productData = state.productData.filter((item)=>item._id !== action.payload)
        },
        resetCart:(state,action)=>{
            state.productData = []
        },
        incrementQuantity:(state,action)=>{
            const item = state.productData.find((item)=>item._id === action.payload._id)
            if(item){
                item.quantity++
            }
        },
        decrementQuantity:(state,action) => {
            const item = state.productData.find((item)=>item._id === action.payload._id)
            if(item){
                item.quantity--
            }
        },
        addUserInfo: (state,action)=>{
            state.userInfo = action.payload
        },
        deleteUserInfo:(state,action)=>{
            state.userInfo = null
        },
    }
    
})

export const { addToCart,deleteCartItme,resetCart,incrementQuantity,decrementQuantity,addUserInfo,deleteUserInfo } = bazarSlice.actions;
export default bazarSlice.reducer 