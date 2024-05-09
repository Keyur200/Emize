import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import CartItems from '../Comp/CartItems'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.cart);

    const [subtotal,setSubtotal] = useState(0);
    const [item,setItem] = useState(0);


    const total= ()=>{
        let subtotal =0;
        let items= 0;
        cartItems.map((item)=>{
            subtotal = item.Price * item.quantity +subtotal;
            items = items +item.quantity;
        })
        setSubtotal(subtotal);
        setItem(items)
    }

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white shadow-2xl p-2 flex flex-col transition-all duration-500 z-50 ${active ? "translate-x-0" : "translate-x-full"} `}>
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <span className="font-semibold text-xl" >My Cart</span>
                    </div>
                    <div> 
                        <IoMdClose onClick={() => setActive(!active)} className="text-lg hover:text-red-500 cursor-pointer" />
                    </div>
                </div>
                <hr className=" mb-3" />

                <div className="overflow-y-scroll scrollbar-hide mb-20 flex flex-col justify-normal items-center  lg:flex lg:flex-col lg:justify-normal">
                    {cartItems.length > 0 ? cartItems.map((item) => {
                        return (

                            <CartItems key={item.id} id={item.id} Cat={item.Cat} Title={item.Title} Brand={item.Brand} Img={item.Img} Price={item.Price} quantity={item.quantity} />

                        )
                    }): (<h1 className="text-2xl text-center font-bold">Your cart is empty.</h1>) }
                </div>

                <div className="absolute bottom-2 w-auto ml-2 bg-black text-white rounded-md shadow-xl pt-2">
                    <h3 className="ml-2">Items: {item} </h3>
                    <h3 className="ml-2">Total Amount: $ {subtotal}</h3>

                    <button onClick={()=>navigate('/success')} className="bg-purple-700 rounded-md py-2 px-5 mt-2 text-white hover:bg-purple-800 w-[90vw] lg:w-[18vw] font-bold ">Checkout</button>
                </div>
            </div>
            <FaShoppingCart onClick={() => { setActive(!active) }} className={` rounded-full bg-white p-3 shadow-md text-5xl cursor-pointer fixed   bottom-5 right-3 ${cartItems.length > 0 && "animate-spin delay-500 transition-all"} `} />
        </>
    )
}

export default Cart