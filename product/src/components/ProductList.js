import React from "react";

function ProductList(props) {
    return(<>
      <h2>Products</h2>
      <div>
        {props.children}
      </div>
    </>)
}

export default ProductList;