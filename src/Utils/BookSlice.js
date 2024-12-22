import { createSlice } from "@reduxjs/toolkit";
import { browseBook } from "./BrowseBookMokeData";
let addBook=createSlice({
    name:"card",
    initialState:{
        books:browseBook,
    },
    reducers:{
        addCardbook:(state,action)=>{
           let newbook=action.payload;
           state.books.push(newbook)
        }
    }
})

export let {addCardbook}=addBook.actions
export default addBook.reducer;