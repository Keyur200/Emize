import React from 'react'
import Navbar from '../Comp/Navbar'
import Categorymenu from '../Comp/Categorymenu'
import Items from '../Comp/Items'
import Cart from './Cart'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Categorymenu />
        <Items />
        <Cart />
    </div>
  )
}

export default Home