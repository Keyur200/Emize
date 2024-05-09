import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  const cartItems = useSelector((state) => state.cart.cart);

  const handler =(e)=>{
    e.preventDefault();
    navigate('/');
    window.location.reload(true)
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ?
          <PropagateLoader color='purple' /> :  <div className='flex flex-col justify-center items-center'>       
          <h2 className="font-semibold text-2xl mb-3 text-center">Order Successful!</h2>
          <p className="text-lg mb-3">Your order has been successfully placed.</p>
          <button onClick={handler}  className="flex justify-center items-center py-2 px-4 rounded-md  bg-purple-600 text-white hover:bg-purple-800">Back To Home</button>
        </div>
    }
      

      </div>
    </div>
  )
}

export default Success