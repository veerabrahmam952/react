import React, { useState } from "react";
import styles from './ProductCard.module.css';

function ProductCard({
    product,
    onPurchase,
    isFavorite,
    onFavorite
}) {
    const [showMore, setShowMore] = useState(false);

    const handlePurchaseSingleItem = () => {
      onPurchase(product.id, product.stockCount -1);
    };

    const handlePurchaseTwoItems = () => {
       onPurchase(product.id, product.stockCount -2);
    };

    const handleFavoriteClick = () => {
        onFavorite(product.id)
    }

    return(
    <div className={styles.Container}>
        <button className={styles.Favorite} onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🩶"}
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
            <button onClick={()=> setShowMore(!showMore)}>{showMore ? "hide" : "Show"}</button>
        </p>
        {showMore && (
            <ul className={styles.Specifications}>
                {product.specifications.map((spec, index)=> (
                    <li key={index}>{spec}</li>
                ))}
            </ul>
       )}
        
        <StockStatus stockCount={product.stockCount} />
        <>
         <p>Price: {product.price}</p>
         {product.stockCount > 0 && (
            <button onClick={handlePurchaseSingleItem}>Buy</button>
        )}
         {product.stockCount > 1 && (
            <button onClick={handlePurchaseTwoItems}>Buy2</button>
        )}
        </>

    </div>
    )
}

function StockStatus({stockCount}) {
    const notAvailable = (<p>No Stock available</p>);
    const available = (<p>{stockCount} items available</p>);

    return stockCount === 0 ? notAvailable : available;
}

export default ProductCard;