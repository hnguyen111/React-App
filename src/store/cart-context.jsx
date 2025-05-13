import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext({
	cart: [],
	cartLength: 0,
	addToCart: () => { }
})

export const CartContextProvider = (props) => {

	const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart') || '[]'));

	const addToCart = (newItem) => {
		const isPresent = cart.some((item) => item.id === newItem.id);
		if (isPresent) {
			setCart((prevState) => prevState.map((item) => item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item));
		} else {
			setCart((prevState) => [...prevState, newItem]);
		}
	}

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);


	const context = {
		cart,
		cartLength: cart.reduce((total, item) => total + item.qty, 0),
		addToCart
	}

	console.log(context);

	return <CartContext.Provider value={context}>
		{props.children}
	</CartContext.Provider>
}

export default CartContext;