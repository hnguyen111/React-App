import './App.css'
import Product from './components/Product/Product'

function App() {
	// const randomMonth = Math.floor(Math.random() * 12 + 1);

	// return <div>
	// 	<h2>Random month {randomMonth}</h2>
	// 	<h1>React App</h1>
	// </div>

	const products = [
		{
			title: "Vase",
			price: 35,
			image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			description: "Ceramic vase in white"
		},
		{
			title: "Trumpet",
			price: 260,
			image: "https://images.unsplash.com/photo-1573871666457-7c7329118cf9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			description: "Brass-colored trumpet"
		}
	]
	return <section>
		{products.map((product, index) => {
			return <Product 
				key={index}
				title={product.title}
				price={product.price}
				image={product.image}
				description={product.description}
			/>
		})}
	</section>
}

export default App
