import React from "react";
import {products as productData} from '../data/product-mock';
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

function DashBoard({onAddToCart}) {
    const [products, setProducts] = React.useState(productData);
    const [favorites, setFavorites] = React.useState([]);
    const [whishlist, setWishlist] = React.useState([]);
    const [filters, setFilters] = React.useState({
      price: {
        min: 0,
        max: 500
      }
    });

    const handleOnPurchase = (productId, stockCount, purchaseCount) => {
      const purchaseProduct = products.find((product)=> product.id === productId);
      if(purchaseProduct) {
        purchaseProduct.count = purchaseProduct.count + purchaseCount;
      }
      setProducts((prevProducts)=> 
        prevProducts.map((product)=> product.id === productId ? {...product, stockCount, count: purchaseProduct.count}: product)
      );
      if(purchaseProduct) {
        onAddToCart(purchaseProduct);
      }
      
    }

    const handleOnFavorite = (productId) => {
      if(favorites.includes(productId)) {
        setFavorites((prevFavorites)=> prevFavorites.filter((id)=> id !== productId));
        setWishlist((prevWishlist)=> prevWishlist.filter((item)=> item.id !== productId));
      } else {
        setFavorites((prevFavorites)=> [...prevFavorites, productId]);
        const product = products.find((product)=> product.id === productId);
        setWishlist((prevWishlist)=> [...prevWishlist, product]);
        console.log(whishlist);
      }
    }

    const handleOnFilter = (key, value) => {
      setFilters((prevFilters)=> ({
        ...prevFilters,
        price: {
          ...prevFilters.price,
          [key]: value, //min: 10, max: 100
        }
      }))
    }
    
    return (
        <>
         <ProductList>
            {products.map((product)=> (
             <ProductCard 
              key={product.id}
              product={product}
              onPurchase={handleOnPurchase}
              isFavorite={favorites.includes(product.id)}
              onFavorite={handleOnFavorite}
            />
        ))}
         </ProductList>
         <h2>Products filtered by price</h2>

          <ProductFilter onFilter={handleOnFilter} filters={filters} />

          {/* Filtered products by price */}
         <ProductList>
          {
            (() => {
              const filteredProducts = products.filter(
                ({price}) => price >= filters.price.min && price <= filters.price.max
              );

              if (filteredProducts.length === 0) {
                return <p>No Items available</p>;
              }

              return filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onPurchase={handleOnPurchase}
                  isFavorite={favorites.includes(product.id)}
                  onFavorite={handleOnFavorite}
                />
              ));
            })()
          }
         </ProductList>
        </>
    )
}

export default DashBoard;