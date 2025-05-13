import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
// import App from './App-example.jsx'
import App from './App.jsx'
import { CartContextProvider } from './store/cart-context';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<CartContextProvider>
			<App />
		</CartContextProvider>
	</BrowserRouter>
)
