import React from "react";
import styles from './ProductList.module.css';

function ProductList(props) {
    return(<>
      <h2>Products</h2>
      <div className={styles.List}>
        {props.children}
      </div>
    </>)
}

export default ProductList;