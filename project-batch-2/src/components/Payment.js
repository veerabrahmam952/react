import React from "react";

const paymentOptions = [
	{ label: "Card", value: "card" },
	{ label: "UPI", value: "upi" },
	{ label: "Net Banking", value: "netbanking" },
];

function Payment({total}) {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert("Payment Successful!");
    }

    const handleOnChange = (e) => {
        console.log("Selected Payment Method:", e.target.value);
    }
   return (
		<div>
			<h2>Payment Page</h2>
			<h3>Total Amount: ${total.toFixed(2)}</h3>
			<h4>Select Payment Option:</h4>
			<form onSubmit={handleOnSubmit}>
				{paymentOptions.map(option => (
					<div key={option.value}>
						<input type="radio" id={option.value} name="payment" value={option.value} onChange={handleOnChange} />
						<label htmlFor={option.value}>{option.label}</label>
					</div>
				))}
				<button type="submit">Pay Now</button>
			</form>
		</div>
   )
}

export default Payment;