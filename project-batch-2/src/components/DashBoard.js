import React from "react";
import {products as productData} from '../data/product-mock';
import ProductList from "./ProductList";

function DashBoard() {
    const [products, setProducts] = React.useState(productData);
    const [favorites, setFavorites] = React.useState([]);
    const [whishlist, setWishlist] = React.useState([]);
    return (
        <>
         <ProductList>
            {products.map((product)=> (
          <p>product is {product.title}</p>
        ))}
         </ProductList>
        </>
    )
}

export default DashBoard;