import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './BookSlice.js'
export let appStore=configureStore({
      reducer:{
          card:cartReducer,
      }
})
export default appStore;