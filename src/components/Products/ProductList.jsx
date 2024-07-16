import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ item, limit }) => {

  return (
    <div className="container">
        <h1>{item}</h1>
    </div>
  )
}

export default ProductList