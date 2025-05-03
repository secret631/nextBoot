import { createSlice } from "@reduxjs/toolkit";
import * as ProductsService from './productsService'
import * as ProductsType from './productsType'

const initialState: ProductsType.initCollectionsState = {
    Products: [],
    Product :{}
  }


  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
    }
  
  
  })

  export default productsSlice.reducer;
