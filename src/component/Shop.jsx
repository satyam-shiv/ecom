import React from 'react'
import { PRODUCT } from "./products";

const Shop = () => {
  return (
   <div className="shop">
     <div className="shopTitle">
       <h1>MYEsyShop</h1>
     </div>
     <div className="product">{PRODUCT[0]}</div>

   </div>
  )
}

export default Shop
