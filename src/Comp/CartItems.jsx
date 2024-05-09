import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, RemoveFromCart, decrement } from '../Redux/cartSlice'

const CartItems = ({id,Img,Price,quantity,Cat,Brand,Title}) => {
    const dispatch =useDispatch();
    
    return (
            <div className="rounded-md shadow-md py-2 px-1  mb-3   ">
                <div className=" flex flex-row gap-3">
                        <img className="w-[50px] h-[50px] object-contain" src={Img} />
                    <div>
                    <div className="flex flex-row gap-14">
                        <h2 className=" text-gray-800 w-[120px] text-sm">{Title.slice(0,15)}...</h2>
                        <MdDelete onClick={()=>dispatch(RemoveFromCart({id,Img,Price,quantity,Cat,Brand,Title}))} className=" text-lg justify-end text-purple-800 hover:text-purple-900 w-[25px]  cursor-pointer" />
                    </div>
                        <div className="flex  justify-between mt-0.5 ">
                            <span>$ {Price}</span>
                            <div className="flex flex-row items-center justify-end gap-2 ">
                                <AiOutlineMinus onClick={()=>dispatch(decrement({id,Img,Price,quantity,Cat,Brand,Title}))} className="border-purple-700 border-2 text-black hover:text-white rounded-sm p-0.5 font-bold cursor-pointer text-lg  hover:bg-purple-700" />
                                <span>{quantity}</span>
                                <AiOutlinePlus onClick={()=>dispatch(AddToCart({id,Img,Price,quantity,Cat,Brand,Title}))} className="border-purple-700 border-2 text-black hover:text-white rounded-sm p-0.5 font-bold cursor-pointer text-lg  hover:bg-purple-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartItems