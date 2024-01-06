import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const GetBooks=createAsyncThunk("get", async()=>{
    try {
        const response= await axios.get("https://example-data.draftbit.com/books?_limit=32")
        return response.data;
    } catch (error) {
        console.log("An unknown error is occured", error)
    }
})


export const BookSlice=createSlice({
    name: "BookSlice",
    initialState:{
        data:[],
        isLoading:false,
        error:null,
    },
    reducers:{},
    extraReducers:{
        [`${GetBooks.pending}`]:(state)=>{
            state.isLoading=true;
            state.error=null;
        },
        [`${GetBooks.fulfilled}`]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.error=null;
        },
        [`${GetBooks.rejected}`]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        }
    }
})

export default BookSlice.reducer;