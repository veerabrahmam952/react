import React from "react";
import { Link } from "react-router-dom";

function Cart({items}) {
    console.log(items);
    return (
        <div>
            <Link to="/" style={{'color': 'white'}}>Back</Link>
            <h2>Your Shopping Cart</h2>
            {items.length === 0 ? (
                <p>No Items in the cart</p>
            ): (
                <ul>
                    {items.map(item=> (
                        <li key={item.id}>{item.title}- ${item.price} (brought {item.count})</li>
                    ))}
                </ul>
            )}
            <Link to='/payment' style={{'color': 'white'}}>Proceed to Payment</Link>
        </div>
    )
}

export default Cart;