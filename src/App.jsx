import './App.css'
import { Routes, Route } from "react-router";
import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Layout from './components/Layout/Layout';

function App() {
    
    return (
        <Layout>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/products' element={<AllProducts />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Layout>
    )
}

export default App
