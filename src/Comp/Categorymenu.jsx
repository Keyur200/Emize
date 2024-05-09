import React, { useState } from 'react'
import Productdetail from '../Data/productdetail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/CategorySlice';
import { SetBrand } from '../Redux/BrandSlice';

const Categorymenu = () => {


  const [categories, setCategories] = useState([]);
  const [brand, setBrandProduct] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state)=>state.category.category);
  const selectedBrand = useSelector((state)=>state.brand.brand);

  const uniquecategory = () => {
    let newCategory = [... new Set(Productdetail.map((item) => item.Cat))]
    let uniqueBrands = [... new Set(Productdetail.map((item)=>item.Brand))]
    setCategories(newCategory);
    setBrandProduct(uniqueBrands);
  }


  useEffect(() => {
    uniquecategory();
  }, [])

  return (
    <div className="mx-5">
      <div className="mt-6 text-lg">
        <h3 className="text-gray-600 font-semibold">Find the best Elctronic Items</h3>
      </div>
      <div className="mt-3 flex flex-row gap-5 overflow-x-scroll scroll-smooth  lg:overflow-x-hidden">
      <button  onClick={()=>dispatch(setCategory("All"))} className={`border-2 py-2 px-4 border-purple-700 rounded-md transition-all duration-300 hover:bg-purple-500 hover:text-white ${ selectedCategory === "All" && "bg-purple-700 text-white"} `}>All</button>

        {
          categories.map((item,index)=>{
            return (
              <button key={index} onClick={()=>dispatch(setCategory(item))} className={`border-2 whitespace-nowrap py-2 px-4 border-purple-700 rounded-md transition-all duration-300 hover:bg-purple-500 hover:text-white ${selectedCategory === item && "bg-purple-700 text-white"} `}>{item}</button>

            )
          })
        }

      </div>
      {/* <div className="mt-3 flex flex-row gap-5 overflow-x-scroll scroll-smooth  lg:overflow-x-hidden">
          {
            brand.map((item,index)=>{
              return (
                <button key={index} onClick={()=>dispatch(SetBrand(item))} className={`border-2 py-2 px-4 border-purple-700 rounded-md transition-all duration-300 hover:bg-purple-500 hover:text-white ${selectedBrand === item && "bg-purple-600 text-white"  } `}>{item}</button>

              )
            })
          }
    </div> */}
    </div>
  )
}

export default Categorymenu