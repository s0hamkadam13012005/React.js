import { Routes,Route} from 'react-router';
import { useEffect, useState } from 'react';
import axios  from 'axios';
import { HomePage } from './pages/home/Homepage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import './App.css'
import { TrackingPage } from './pages/TrackingPage';
function App() {

   const [cart, setCart] = useState([]);

    useEffect(() => {
  console.log('Running useEffect');
  axios.get('/api/cart-items?expand=product')
    .then((response) => {
      setCart(response.data);
    })
    .catch((err) => {
      console.error('Fetch error:', err.message);
    });
}, []);

  return (
    

    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage/>}/>

    </Routes>
  )
}

export default App
