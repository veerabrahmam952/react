import React from "react";

function Products({products}) { //[{name, price, description}, {name, price, description}, ...]
    return (
        <div>
            <h1>Products</h1>
            <p>List of products will be displayed here.</p>
            <ul>
                {products.map((product, index) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: INR: {product.price}</p>
                        <p>Description: {product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;