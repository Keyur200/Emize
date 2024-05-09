import React from 'react'
import Cards from './Cards'
import Productdetail from '../Data/productdetail'
import { useSelector } from 'react-redux'

const Items = () => {

  const category = useSelector((state)=>state.category.category);
  const brand = useSelector((state)=>state.brand.brand);
  const search = useSelector((state)=>state.search.search);

  return (
    <div className="flex flex-wrap gap-8 justify-center lg:justify-start mx-5 my-10 ">

        {
          Productdetail.filter((item)=>{
              if(category === "All"){
                return item.Title.toLowerCase().includes(search.toLowerCase());
              }else if (brand === item.Brand){
                
                return (item.Title.toLowerCase().includes(search.toLowerCase()));
                
              }else{
                return category === item.Cat && item.Title.toLowerCase().includes(search.toLowerCase());
              }
          }).map((item)=>{
            return(
            <Cards key={item.id} id={item.id} Img={item.Img} Title={item.Title} Brand={item.Brand} Cat={item.Cat} Price={item.Price } />
            )
          })
        }

                {
          Productdetail.filter((item)=>{
              if(brand === item.Brand){
                return item.Title.toLowerCase().includes(search.toLowerCase());
              }
          }).map((item)=>{
            return(
            <Cards key={item.id} id={item.id} Img={item.Img} Title={item.Title} Brand={item.Brand} Cat={item.Cat} Price={item.Price } />
            )
          })
        }

    </div>
  )
} 

export default Items