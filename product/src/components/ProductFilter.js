import React from "react";

function ProductFilter({onFilter, filters}) {
    return (
        <div>
            Price: $
            <input
              defaultValue={filters.price.min} 
              type="number"
              min={0}
              max={999}
              placeholder="Min Price"
              onChange={(e)=> onFilter("min", e.target.value)}
            />{" "}
            - $
            <input
              defaultValue={filters.price.max} 
              type="number"
              min={0}
              max={999}
              placeholder="Max Price"
              onChange={(e)=> onFilter("max", e.target.value)}
            />
            
        </div>
    )
}

export default ProductFilter;