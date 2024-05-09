import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../Redux/cartSlice';

const Cards = ({id, Img, Title, Brand, Price, Cat}) => {
    const dispatch = useDispatch();
    
    return (
        <div className="w-[250px] flex flex-col rounded-md shadow-lg py-2 px-3 ">
            <div className="flex justify-center items-center my-5">
            <img className="object-contain w-[170px] h-[170px] hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer" src={Img} alt="Images" />
            </div>
            <div>
                <h2 className="font-semibold">{Title}</h2>

            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col text-sm mt-2">
                    <span className="text-gray-700 font-bold ">$ {Price}</span>
                    <span className="text-gray-700 font-bold flex flex-row items-center gap-1"><AiFillStar className="text-purple-600" /> 4.5</span>
                </div>
                <div >
                    <button onClick={()=>dispatch(AddToCart({id,Title,Img,Price,Cat,quantity:1,Brand}))} className="border-2 bg-purple-600 border-purple-600 py-1 text-white px-3 mt-3 rounded-md hover:bg-purple-700 hover:border-purple-700 ">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cards