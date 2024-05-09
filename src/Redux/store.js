import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import CategorySlice from './CategorySlice';
import SearchSlice from './SearchSlice';
import BrandSlice from './BrandSlice';

export const store = configureStore({
    reducer :{
        cart : cartSlice,
        category: CategorySlice,
        search: SearchSlice,
        brand: BrandSlice,
    }
})

