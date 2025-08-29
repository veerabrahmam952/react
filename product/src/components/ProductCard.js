import React from "react";
import styles from './ProductCard.module.css';

function ProductCard({
    product
}) {
    return(
    <div className={styles.Container}>
        <button className={styles.Favorite}>
            "❤️" "🩶"
        </button>
        <h2>{product.title}</h2>
        <img 
          src={product.imageSrc}
          alt={product.title}
          width={128}
          height={128}
        />
        <p>
            Specifications:
            
        </p>
        <ul className={styles.Specifications}>
            {product.specifications.map((spec, index)=> (
                <li key={index}>{spec}</li>
            ))}
            </ul>
            <button>Show</button>
        <p>{product.stockCount} Items available</p>
        <>
         <p>Price: {product.price}</p>
         <button>Buy</button>
         <button>Buy2</button>
        </>

    </div>
    )
}

export default ProductCard;